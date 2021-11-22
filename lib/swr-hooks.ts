import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
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

export function useRooms(username: string) {
  const { data, error } = useSWR(`/api/get-rooms`, fetcher)

  let myRooms, booked, unbooked;

  if(data) {
    myRooms = data.filter(room => room.username === username);
    booked = data.filter(room => room.username !== username && room.username !== null);
    unbooked = data.filter(room => room.username === null);
  }

  return {
    rooms: { myRooms, booked, unbooked },
    isLoading: !error && !data,
    isError: error,
  }
}
