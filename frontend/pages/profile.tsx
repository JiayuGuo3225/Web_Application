import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useUser from '../lib/useUser'
import nba from '../lib/nba'
// if time difference is less than 1 hour
const isTime = (time) => {
  const now = new Date()
  const diff = new Date(time) - now
  return diff < 1800000
}
const Profile: NextPage = () => {
  let user = useUser()
  let router = useRouter()
  const [history, setHistory] = useState()
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          bets(
            sort: "commence_time:desc"
            filters: { user_1: { username: { eq: "${user.id}" } } }
          ) {
            data {
              id
              attributes {
                chosen
                home
                away
                points
                commence_time
                price
                payback
              }
            }
          }
        }
        
        `
      }),
    }

    ).then((res) => res.json()).then((res) => {
      const data = res?.data?.bets?.data
      console.log("bets", data);
      setHistory(data)




    })
  }, [])
  // const handleCalc = (bet) => {
  //   const att = bet.attributes
  //   const chosen = bet.attributes.chosen
  //   const opponent = chosen == "home" ? "away" : "home"
  //   const teamName = bet.attributes[chosen].split(" ").at(-1)

  //   console.log(bet);
  //   const vicGame = nba.history.filter(game => game[chosen + "Team"].teamName == teamName).filter(game => game[chosen + "Team"].score > game[opponent + "Team"].score)[0]



  //   let payback = Math.floor(att.points * att.price)
  //   if (!vicGame) {
  //     alert("Thanks for participation！")
  //     payback = 0
  //   }
  //   fetch(process.env.NEXT_PUBLIC_API, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: `mutation {
  //         updateBet(id:${bet.id},data:{payback:${payback}}){
  //           data{
  //             id
  //           }
  //         }
  //       }
  //       `
  //     }),
  //   }).then(() => {
  //     // console.log(Number(user?.points),payback,);
  //     if (!vicGame) {
  //       router.reload(window.location.pathname)
  //       return
  //     }
  //     fetch(process.env.NEXT_PUBLIC_API, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         query: `mutation {
  //           updateUser1(id:${user.id},data:{
  //             bet_points:${Number(user?.points) + payback}
  //           }){
  //             data {
  //               attributes{
  //                 bet_points
  //               }
  //             }
  //           }
  //         }`
  //       }),

  //     }).then((res) => res.json()).then((res) => {
  //       // console.log("res",res);

  //       // console.log(res?.data?.user1S?.data?.[0]?.attributes?.bet_points);

  //       document.cookie = `points=${res?.data?.updateUser1?.data?.attributes?.bet_points};`

  //       alert(payback + " points payback success!")
  //       router.push('/profile')
  //     })

  //   }
  //   )
  // }
  const handleChangePassword = () => {
    const newPass = window.prompt("Pless input new password", "")
    console.log(newPass);
    fetch(process.env.NEXT_PUBLIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
          updateUser1(id:${user.id},data:{
            password:"${newPass}"
          }){
            data {
              id
            }
          }
        }`
      }),

    }).then(res => res.json()).then(res => {
      alert("Success!")

      user?.logout()
      router.push('/auth')
    })
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className='flex '><button
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => { user?.logout(); router.push("/auth") }}
      >
        Log out
      </button>
        <button
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleChangePassword}
        >
          Change password
        </button></div>

      {user && <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400">{"username: " + user.username + "  balance: " + user.points}</p>
      </div>}
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
                Chosen team
              </th>
              <th scope="col" className="py-3 px-6">
                Odds
              </th>
              <th scope="col" className="py-3 px-6">
                Points
              </th>
              <th scope="col" className="py-3 px-6">
                Commence time
              </th>
              <th scope="col" className="py-3 px-6">
                Payback
              </th>
            </tr>
          </thead>
          <tbody>

            {!history ? "loading" : history.map((bet) =>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td

                  className="py-4 px-6"
                >
                  {bet.attributes.home}
                </td>
                <td className="py-4 px-6">{bet.attributes.away}</td>
                <td className="py-4 px-6">{bet.attributes.chosen}</td>


                <td

                  className="py-4 px-6"
                >
                  {bet.attributes.price}
                </td>
                <td className="py-4 px-6">{bet.attributes.points}</td>
                <td className="py-4 px-6">{new Date(bet.attributes.commence_time).toISOString().replace(/T/, ' ').replace(/\..+/, '') + "UST"}</td>
                {new Date() - new Date(bet.attributes.commence_time) < 1800000 ?
                  <td className="py-4 px-6">Not ended</td> :
                  <td className="py-4 px-6">{bet.attributes.payback === null ? "pending" :
                    bet.attributes.payback}</td>}


              </tr>)}
          </tbody>
        </table>
      </div>



    </div>
  )
}

export default Profile
