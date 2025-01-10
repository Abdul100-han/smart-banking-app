import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const page = async () => {

  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficeintly"
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  )
}

export default page
