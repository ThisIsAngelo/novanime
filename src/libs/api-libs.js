export async function getAnimeResponse(source, query) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${source}?${query}`
  );
  const anime = await response.json();
  return anime;
}

export async function getNestedAnimeResponse(source, objectProperty) {
    const response = await getAnimeResponse(source)
    const animes = response.data?.flatMap((item) => item[objectProperty])
    return animes
}

export async function getAnimeStatus(source,status) {
  const response = await getAnimeResponse(source, `status=${status}`)
  const anime = response.data?.flatMap((item) => item)
  return anime

}


export function reproduce(data, gap) {
  let response;
  do {
    const first = ~~(Math.random() * (data?.length - gap) + 1);
    const last = first + gap;
    response = {
      data: data?.slice(first, last)
    };
  } while (hasDuplicates(response.data, 'mal_id'));
  
  return response;
}

function hasDuplicates(arr, key) {
  return new Set(arr?.map(item => item[key])).size!== arr?.length;
}