// Using closures we can cach any operation to improve performance

function createFetchSuggestios () {
    const cache = {}

    return async function fetchSuggestion(query) {
        console.log(query, 'query')
        if (!query) return
        if (query in cache) {
            console.log('Fetching items from cacheee')
            console.log(cache)
            return cache[query];
        }

        console.log('Fetching Records')
        const response = await fetch('json/real_users_list.json')
        const res = await response.json()

        const lowerCasedSearch = query.toLowerCase();

        cache[query] = res.filter(user =>
            user.firstName.toLowerCase().startsWith(lowerCasedSearch) ||
            user.lastName.toLowerCase().startsWith(lowerCasedSearch)
          ).map(user => `${user.firstName} ${user.lastName}`);
    
        return cache[query]
    }
}

const search = createFetchSuggestios()

async function run (name) {
    console.log(name.value)
  const data = await search(name.value)
  console.log(data)
}
