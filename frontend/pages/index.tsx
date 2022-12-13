import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import nba from '../lib/nba'
import useUser from '../lib/useUser'
import { useRouter } from 'next/router'
import poster2 from '../public/poster2.jpg'
import poster1 from '../public/poster1.jpg'
const Game: NextPage = () => {

  const [bets, setBets] = useState()
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
            availableBets(sort: "commence_time:desc"){
              data {
                attributes{
                  home_team
                  home_odds
                  away_team
                  away_odds
                  commence_time
                }
              }
            }
          }`
      }),
    }).then((res) => res.json()).then((res) => {
      const processed = res.data.availableBets.data.map(item => item.attributes)
      // .filter(item=>item.commence_time<Date.now())
      setBets(processed)
      console.log(processed);

    }, console.log)


  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center  py-2">
      <Head>
        <title>Game</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className='flex pt-5 w-full justify-around content-center'>
        <Image className='max-w-xs rounded-lg' alt="poster1" src={poster1} />
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Home team
                </th>

                <th scope="col" className="py-3 px-6">
                  Away team
                </th>

                <th scope="col" className="py-3 px-6">
                  Commence time
                </th>

              </tr>
            </thead>
            <tbody>

              {!bets ? "loading" : bets.map((bet) => <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th

                  className="py-4 px-6"
                >
                  {bet.home_team}
                </th>

                <th

                  className="py-4 px-6"
                >
                  {bet.away_team}
                </th>


                <td className="py-4 px-6">{new Date(bet.commence_time).toISOString().replace(/T/, ' ').replace(/\..+/, '') + "UST"}</td>

              </tr>)}
            </tbody>
          </table>
        </div>
        <Image className='max-w-xs rounded-lg' alt="poster2" src={poster2} />
      </div>
     




    </div>
  )
}

export default Game