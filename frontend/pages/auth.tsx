import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { log } from 'console'

const Login: NextPage = () => {
    const [isLogin, setState] = useState(true)
    // console.log(isLogin);

    const router = useRouter()
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const form = event.target
        const loginQuery = `query {
            user1S(filters:{username:{eq:"${form.username.value}"}}){
              data{
                id
                attributes {
                  password
                  bet_points
                }
              }
            }
          }`
        const signupQuery = `
          mutation {
              createUser1(data: { username: "${form.username.value}", password: "${form.password.value}" }) {
                data {
                  id
                  attributes {
                    password
                    bet_points
                  }
                }
              }
            }
          `
        fetch(process.env.NEXT_PUBLIC_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: isLogin ? loginQuery : signupQuery
            }),
        }).then((res) => res.json(), err => err.json()
        ).then((res) => {
            if (res.errors) {
                alert(JSON.stringify(res.errors))
                // console.log(isLogin)
            }
            else {
               console.log("res",res);
               const data = isLogin?res?.data.user1S.data?.[0]:res?.data.createUser1.data
                document.cookie = `username=${form.username.value}; `
                document.cookie = `password=${form.password.value};`
                document.cookie = `userid=${data.id};`
                document.cookie = `points=${data.attributes?.bet_points};`
                if (isLogin) {
                    const password = data.attributes?.password
                    if (password == form.password.value) {
                        router.push("/profile")
                    } else {
                        alert("wrong username or password")
                    }
                } else {
                    router.push("/profile")
                }

                //console.log(`username=${form.username.value}; password=${form.password.value};`);

            }
        });
    }, [isLogin])

    useEffect(() => {
        // Prefetch the dashboard page
        router.prefetch('/profile')
    }, [])
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Auth</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setState(!isLogin)}
            >
                Sign{isLogin ? " up" : " in"}
            </button>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Username
                    </label>
                    <input
                        type="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        required
                    />
                </div>
                {!isLogin && <div className="mb-6">
                    <label
                        htmlFor="confirm_password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm password
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        required
                    />
                </div>}
                <button
                    type="submit"

                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>






        </div>
    )
}

export default Login