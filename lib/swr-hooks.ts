import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useEntries() {
  const { data, error } = useSWR(`/api/get-entries`, fetcher)

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useEntry(id: string) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}

export function useAuth() {
  let username = null;
  if (process.browser) {
    username = localStorage.getItem('user');
  }
  return {
    isLoggedIn: !!username,
    username,
  }
}
