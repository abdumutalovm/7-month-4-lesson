import React from 'react'
import logo from './assets/logos.png'
import apple from './assets/apple.svg'
import avaiable from './assets/avaiable.svg'
import eye from './assets/eye.svg'
import edit from './assets/edit.svg'
import trash from './assets/delete.svg'
import realme from './assets/realme.svg'
import nokia from './assets/nokia.svg'
import samsung from './assets/samsung.svg'
import blackBerry from './assets/blackberry.svg'
import noStock from './assets/noStock.svg'
import flashSale from './assets/flashSale.svg'

function App() {
  return (
    <div className='mx-auto'>
      <header>
        <a href="#"> <img src={logo} alt="company logo" className='mx-auto mt-8 mb-4' /></a>
      </header>
      <main className='mx-auto'>
        <table className='mx-auto'>
          <thead>
            <tr className='flex items-center gap-48 px-2.5 py-1.5 rounded-md bg-[#1A2038] text-white text-sm pr-28'>
              <th className='mr-48'>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='flex text-white items-center mt-4 rounded-lg bg-[#1F2A40] px-3 py-4'>
              <td className='flex items-center gap-3'>
                <img src={apple} alt="" />
                <span>
                  <h5>Apple</h5>
                  <p className='text-[#6C757D]'>mail@gmail.com!</p>
                </span>
              </td>
              <td className='ml-60'>Technology</td>
              <td className='ml-44'>200.00$</td>
              <td className='ml-40'><img src={avaiable} alt="avaiable status" /></td>
              <td className='flex items-center gap-5 ml-36'>
                <img src={eye} alt="hide icon" className='hover:opacity-60' />
                <img src={edit} alt="edit icon" className='hover:opacity-60' />
                <img src={trash} alt="trash icon" className='hover:opacity-60' />
              </td>
            </tr>


            <tr className='flex text-white items-center mt-4 rounded-lg bg-[#1F2A40] px-3 py-4'>
              <td className='flex items-center gap-3'>
                <img src={realme} alt="realme img" />
                <span>
                  <h5>Realme</h5>
                  <p className='text-[#6C757D]'>mail@gmail.com!</p>
                </span>
              </td>
              <td className='ml-60'>Technology</td>
              <td className='ml-44'>200.00$</td>
              <td className='ml-40'><img src={noStock} alt="avaiable status" /></td>
              <td className='flex items-center gap-5 ml-36'>
                <img src={eye} alt="hide icon" className='hover:opacity-60' />
                <img src={edit} alt="edit icon" className='hover:opacity-60' />
                <img src={trash} alt="trash icon" className='hover:opacity-60' />
              </td>
            </tr>


            <tr className='flex text-white items-center mt-4 rounded-lg bg-[#1F2A40] px-3 py-4'>
              <td className='flex items-center gap-3'>
                <img src={samsung} alt="samsung img" />
                <span>
                  <h5>Samsung</h5>
                  <p className='text-[#6C757D]'>mail@gmail.com!</p>
                </span>
              </td>
              <td className='ml-60'>Technology</td>
              <td className='ml-44'>200.00$</td>
              <td className='ml-[150px]'><img src={flashSale} alt="avaiable status" /></td>
              <td className='flex items-center gap-5 ml-36'>
                <img src={eye} alt="hide icon" className='hover:opacity-60' />
                <img src={edit} alt="edit icon" className='hover:opacity-60' />
                <img src={trash} alt="trash icon" className='hover:opacity-60' />
              </td>
            </tr>


            <tr className='flex text-white items-center mt-4 rounded-lg bg-[#1F2A40] px-3 py-4'>
              <td className='flex items-center gap-3'>
                <img src={nokia} alt="nokia img" />
                <span>
                  <h5>Nokia</h5>
                  <p className='text-[#6C757D]'>mail@gmail.com!</p>
                </span>
              </td>
              <td className='ml-60'>Technology</td>
              <td className='ml-44'>200.00$</td>
              <td className='ml-40'><img src={avaiable} alt="avaiable status" /></td>
              <td className='flex items-center gap-5 ml-36'>
                <img src={eye} alt="hide icon" className='hover:opacity-60' />
                <img src={edit} alt="edit icon" className='hover:opacity-60' />
                <img src={trash} alt="trash icon" className='hover:opacity-60' />
              </td>
            </tr>


            <tr className='flex text-white items-center mt-4 rounded-lg bg-[#1F2A40] px-3 py-4'>
              <td className='flex items-center gap-3'>
                <img src={blackBerry} alt="blackberry img" />
                <span>
                  <h5>BlackBerry</h5>
                  <p className='text-[#6C757D]'>mail@gmail.com!</p>
                </span>
              </td>
              <td className='ml-60'>Technology</td>
              <td className='ml-44'>200.00$</td>
              <td className='ml-40'><img src={noStock} alt="avaiable status" /></td>
              <td className='flex items-center gap-5 ml-36'>
                <img src={eye} alt="hide icon" className='hover:opacity-60' />
                <img src={edit} alt="edit icon" className='hover:opacity-60' />
                <img src={trash} alt="trash icon" className='hover:opacity-60' />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default App