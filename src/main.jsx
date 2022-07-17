import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { render } from 'react-dom'

const root = document.getElementById('root')

import NewBatchUpdatePage from '../routes/NewBatchUpdatePage'

const element = <NewBatchUpdatePage></NewBatchUpdatePage>

createRoot(root).render(element)
