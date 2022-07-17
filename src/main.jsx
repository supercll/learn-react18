import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { render } from 'react-dom'

const root = document.getElementById('root')

import NewBatchUpdatePage from '../routes/NewBatchUpdatePage'
import SuspensePage from '../routes/SuspensePage'

const element = <SuspensePage></SuspensePage>

createRoot(root).render(element)
