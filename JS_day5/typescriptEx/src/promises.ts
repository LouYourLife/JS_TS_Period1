interface IChuckInfo {
    value: string;
    id: number;
    url: string;
    created_at: Date;
    updated_at: Date;
    icon_url: string;
}

function chuckNorrisFetcher(): Promise<IChuckInfo> {
    return fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => data )
  }
  
  async function chuckNorrisTester() {
    let joke = await chuckNorrisFetcher()
    console.log(joke.value)
  }
  
  console.log(chuckNorrisTester());