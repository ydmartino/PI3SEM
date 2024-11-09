import React from 'react'
import { Tabs } from './Tabs'
import { Btns } from './Btns'
import { OpenCloseBtn } from './OpenCloseBtn'

function ContactHeader({ toggleRecent, toggleAllContacts, toggleMode, handleFilter, toggleLeftBar }) {
  return (
    <div className="contactHeader">
        <Tabs toggleRecent={toggleRecent} toggleAllContacts={toggleAllContacts} />
        <Btns toggleMode={toggleMode} handleFilter={handleFilter} />
        <OpenCloseBtn toggleLeftBar={toggleLeftBar} />
    </div>
  )
}

export default ContactHeader