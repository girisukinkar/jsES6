// Design and implement a taskrunner utility that processes asynchronous tasks with a maximum concurrency limit. The utility should ensure that at most a defined number of tasks are running at any given time.
// If more tasks are pushed into the queue when the limit is reached, they should wait until at least one running task is completed before execution.
// The push method is used to add tasks (async functions) to the executor. if the current number of running tasks is below the concurrency limit, the tasks should be executed immediately.
// if the number of running tasks is equal to or exceeds the concurrency limit, the task should wait until a running task finishes before starting.


class TaskRunner {
    constructor(concurrency) {
        this.concurrency = concurrency;
        this.queue = [];
        this.runningTasks = 0;
    }

    async push(task) {
        if (this.runningTasks < this.concurrency) {
            await this.execute(task)
        } else {
            this.queue.push(task)
        }
    }


    async execute (task) {
        this.runningTasks += 1;
        try {
            await task()
        } finally {
            this.runningTasks -= 1;
            if (this.queue.length && this.runningTasks < this.concurrency) {
                const newTask = this.queue.shift()
                this.execute(newTask)
                
            }
        }
    }
}


const ex = new TaskRunner(3)

// const delay = async (timeout) =>  { 
//     return new Promise((res,rej) => { 
//         setTimeout(res, timeout)
//     }) 
// }


async function delay(timers) {
    return new Promise((res) => setTimeout(res, timers))
}

const t1 = async () => {
    console.log('t1 started')
    await delay(1500)
    console.log('t1 finished')
}
const t6 = async () => {
    console.log('t6 started')
    await delay(1500)
    console.log('t1 finished')
}
const t2 = async () => {
    console.log('t6 started')
    await delay(2000)
    console.log('t2 finished')
}
const t3 = async () => {
    console.log('t3 started')
    await delay(500)
    console.log('t3 finished')
}
const t4 = async () => {
    console.log('t4 started')
    await delay(3300)
    console.log('t4 finished')
}

const t5 = async () => {
    console.log('t5 started')
    await delay(1500)
    console.log('t5 finished')
}


ex.push(t1)
ex.push(t2)
ex.push(t3)
ex.push(t4)
ex.push(t5)
ex.push(t6)
