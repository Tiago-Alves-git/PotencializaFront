import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';
import Logo from '../static/themes/icons/assistant.png';
import Budget from '../components/dashboard/overview/budget';
import LatestOrders from '../components/dashboard/overview/latest-orders';
import LatestProducts from '../components/dashboard/overview/latest-products';
import Sales from '../components/dashboard/overview/sales';
import TasksProgress from '../components/dashboard/overview/tasks-progress';
import TotalCustomers from '../components/dashboard/overview/total-customers';
import TotalProfit from '../components/dashboard/overview/total-profit';
import Traffic from '../components/dashboard/overview/traffic';



export default function Page() {
  return (
    <Grid container spacing={3} sx={{ marginBottom: '50px' }}>
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>
      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            { name: 'Esse Ano', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Ultimo Ano', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <LatestProducts
          products={[
            {
              id: 'PRD-005',
              name: 'P&D',
              image: Logo,
              updatedAt: "Inovação - Realocar 5% da verba para desenvolvimento desktop",
            },
            {
              id: 'PRD-004',
              name: 'Infraestrutura',
              image: Logo,
              updatedAt: "Avaliar ferramentas para produtos mobile",
            },
            {
              id: 'PRD-003',
              name: 'Marketing',
              image: Logo,
              updatedAt: "Congelar - 10% do gasto com publicidade via rede social",
            },
            {
              id: 'PRD-002',
              name: 'P&D',
              image: Logo,
              updatedAt: "Possibilidade de abertura de capital para novas startups",
            },
            {
              id: 'PRD-001',
              name: 'TI',
              image: Logo,
              updatedAt: "Correções de bugs no setor de compras via tablet. (Revisado alto numero de compras canceladas ou pendentes) ",
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'ORD-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 30.5,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
              device: "Tablet",
            },
            {
              id: 'ORD-006',
              customer: { name: 'Cao Yu' },
              amount: 25.1,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
              device: "Desktop",
            },
            {
              id: 'ORD-004',
              customer: { name: 'Alexa Richardson' },
              amount: 10.99,
              status: 'refunded',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
              device: "Tablet",
            },
            {
              id: 'ORD-003',
              customer: { name: 'Anje Keizer' },
              amount: 96.43,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
              device: "Tablet",
            },
            {
              id: 'ORD-002',
              customer: { name: 'Clarke Gillebert' },
              amount: 32.54,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
              device: "Desktop",
            },
            {
              id: 'ORD-001',
              customer: { name: 'Adam Denisov' },
              amount: 16.76,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
              device: "Desktop",

            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
