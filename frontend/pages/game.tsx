import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import nba from '../lib/nba'
import useUser from '../lib/useUser'
import { useRouter } from 'next/router'
const Game: NextPage = () => {
  const user = useUser(), router = useRouter()
  const [bets, setBets] = useState()
  const [betting, setBetting] = useState(false)
  const [selected, setSelected] = useState()
  const handleBet = (betting) => {
    if (!user) { router.push("/auth") }
    else { setBetting(betting) }
    // e.preventDefault()
    // const form = e.target
    // console.log(e.target.team[0].value,form.team[1].value,e.target.team.value,e.target.points.value);



  }
  const handleSubmitBet = (e) => {
    // console.log(betting);

    e.preventDefault()
    const form = e.target
    const price = selected == "home" ? betting.home_odds : betting.away_odds
    fetch(process.env.NEXT_PUBLIC_API.replace("/graphql", "/api/create-bet"), {
      method: 'POST',

      body: JSON.stringify({
        home: betting.home_team,
        away: betting.away_team,
        mID: betting.mID,
        price: price,
        chosen: form.team.value,
        user_1: user.id,
        points: form.points.value,
        commence_time: betting.commence_time,
      })
    }).then((res) => {
      // console.log(res);

      return res.json()
    }).then((res) => {
      alert(res.result)
      // console.log(res);

      setBetting(undefined)
      if (res.result == "Success!") {
        document.cookie = `points=${res.points_after};`
      }
    })
    // console.log(form.team[0].value,form.team[1].value,e.target.points.value,betting.commence_time);

    // fetch(process.env.NEXT_PUBLIC_API, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: `mutation {
    //       createBet(
    //         data: {mID:"${betting.mID}",price:${price}, chosen: "${form.team.value}", home: "${betting.home_team}", away: "${betting.away_team}", user_1: "${user.id}", points: ${form.points.value},commence_time:"${betting.commence_time}" }
    //       ) {
    //         data {
    //           id
    //         }
    //       }
    //       updateUser1(id:${user.id},data:{
    //         bet_points:${after_points}
    //       }){
    //         data {
    //           attributes{
    //             bet_points
    //           }
    //         }
    //       }
    //     }
    //     `
    //   }),
    // }).then(() => {
    //   setBetting(undefined)
    //   alert("Bet success!")
    //   document.cookie = `points=${after_points};`
    // }, alert)


  }

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          availableBets(sort: "commence_time:desc", pagination: { limit: 20 }) {
            data {
              attributes {
                mID
                home_team
                home_odds
                away_team
                away_odds
                commence_time
              }
            }
          }
        }
        `
      }),
    }).then((res) => res.json()).then((res) => {
      // console.log(res.data.availableBets.data.length);

      const processed = res.data.availableBets.data.map(item => item.attributes).filter(item => {
        // console.log("item",item.commence_time,new Date(item.commence_time),Date());
        return new Date(item.commence_time) > Date.now()


      })
      // .filter(item=>item.commence_time<Date.now())
      console.log("bets", processed);

      setBets(processed)
      console.log(processed);

    }, console.log)


  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Game</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

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

              {/* <th scope="col" className="py-3 px-6">
                Away Price
              </th> */}
              <th scope="col" className="py-3 px-6">
                Commence time
              </th>
              <th scope="col" className="py-3 px-6">
                Bet
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
              <td className="py-4 px-6">
                <a
                  onClick={() => handleBet(bet)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Bet
                </a>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {/* modal */}
      <div

        tabIndex={-1}

        className={"flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full" + (betting ? "" : " hidden")}
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto">
          {/* Modal content */}

          <form
            action="#"
            onSubmit={handleSubmitBet}
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
          >
            {/* Modal header */}

            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Betting
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="editUserModal"
                onClick={() => setBetting(undefined)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-6 gap-6">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Team
                      </th>

                      <th scope="col" className="py-3 px-6">
                        Odds
                      </th>

                      <th scope="col" className="py-3 px-6">
                        Select
                      </th>

                    </tr>
                  </thead>
                  {!betting ? "" : <tbody>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th

                        className="py-4 px-6"

                      >
                        <label htmlFor={betting.home_team} >{betting.home_team}</label>

                      </th>

                      <td className="py-4 px-6">{betting.home_odds}</td>
                      {/* <td className="py-4 px-6">{bet.home_odds}</td> */}
                      <td className="py-4 px-6"><input required type="radio" onClick={() => setSelected("home")} id={betting.home_team} name="team" value={"home"} /></td>


                    </tr><tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th

                        className="py-4 px-6"

                      >
                        <label htmlFor={betting.away_team} >{betting.away_team}</label>

                      </th>

                      <td className="py-4 px-6">{betting.away_odds}</td>
                      {/* <td className="py-4 px-6">{bet.home_odds}</td> */}
                      <td className="py-4 px-6"><input type="radio" onClick={() => setSelected("away")} id={betting.away_team} name="team" value={"away"} /></td>


                    </tr>
                  </tbody>}
                </table>

              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <input placeholder='points' name="points" type="number" required />
              <button
                type="submit"

                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={(betting ? "" : "hidden ") + "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 backdrop-blur-sm"}></div>



    </div>
  )
}

export default Game