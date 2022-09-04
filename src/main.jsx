import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { render } from 'react-dom'

const root = document.getElementById('root')

import NewBatchUpdatePage from '../routes/NewBatchUpdatePage'
import SuspensePage from '../routes/SuspensePage'
import StartTransition from '../routes/StartTransition'
import UpdatePriorityPage from '../routes/UpdatePriorityPage'
import UseDeferredValuePage from '../routes/UseDeferredValuePage'

// const element = <NewBatchUpdatePage></NewBatchUpdatePage>
// const element = <SuspensePage></SuspensePage>
// const element = <StartTransition></StartTransition>
// const element = <UpdatePriorityPage></UpdatePriorityPage>
const element = <UseDeferredValuePage></UseDeferredValuePage>

createRoot(root).render(element)
