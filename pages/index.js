
import styles from '../styles/Home.module.css'
import prisma from 'lib/prisma'

export default function Home({ cars }) {
  return (
    <div className={styles.container}>
      <ul>
        {cars.map((el) => {
          return (
            <li key={el.id}>{el.brand} - {el.model} </li>

          )
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  let cars = await prisma.car.findMany({ take: 1 });
  cars = JSON.parse(JSON.stringify(cars));
  return {
    props: {
      cars,
    }
  }
}