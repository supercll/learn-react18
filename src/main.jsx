import React from 'react'
import ReactDOM from 'react-dom/client'
import { render } from 'react-dom'

const root = document.getElementById('root')

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>lear-react18</React.StrictMode>,
// )

import OldBatchUpdatePage from '../routes/OldBatchUpdatePage'

const element = <OldBatchUpdatePage></OldBatchUpdatePage>
render(element, root)
