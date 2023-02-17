import React, { useEffect, useState } from 'react'
import './chart.scss'
import { BarChart,Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tháng 1',
    total: 10000,
  },
  {
    name: 'Tháng 2',
    total: 8000,
  },
  {
    name: 'Tháng 3',
    total: 9000,
  },
  {
    name: 'Tháng 4',
    total: 12000,
  },
  {
    name: 'Tháng 5',
    total: 8500,
  },
  {
    name: 'Tháng 6',
    total: 15000,
  },
  {
    name: 'Tháng 7',
    total: 6000,
  },
  {
    name: 'Tháng 8',
    total: 6800,
  },
  {
    name: 'Tháng 9',
    total: 9800,
  },
  {
    name: 'Tháng 10',
    total: 10000,
  },
  {
    name: 'Tháng 11',
    total: 16000,
  },
  {
    name: 'Tháng 12',
    total: 17500,
  },
];

const Chart = () => {
  
  return (
    <div className='chart'>
      <form >
        <div className='date-container'>
          <div className='date-input'>
              <label>Từ Ngày</label>
              <input type="date" />
          </div>
          <div className='date-input'>
              <label>Đến Ngày</label>
              <input type="date" />
          </div>
          <button>Lọc</button>
        </div>
      </form>
      <div className='select-container'>
        <label>Lọc Theo</label>
        <select className='date-select'>
            <option value="">Hôm nay</option>
            <option value="">Tháng Này</option>
            <option value="">Tháng Trước</option>
            <option value="">365 Ngày Trước</option>
        </select>
      </div>
      <p className='title'> Last 1 year</p>
      <ResponsiveContainer width="100%" height={300}>
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#FFB26B" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart