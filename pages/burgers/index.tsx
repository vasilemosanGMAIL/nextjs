import Link from 'next/link';
import style from '../../styles/Burgers.module.css';
import Image from 'next/image';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data },
  };
};

const Burger = ({ burgers }) => {
  return (
    <div>
      <h1>Burger</h1>
      {burgers.map((burger) => {
        return (
          <Link
            className={style.burgerCard}
            href={`/burgers/${burger.id}`}
            key={burger.id}
          >
            <div className={style.imageContainer}>
              <Image
                src={`${burger.image}`}
                alt={`${burger.name}`}
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{burger.name}</h3>
            </div>
            <div>
              <p>{burger.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Burger;
