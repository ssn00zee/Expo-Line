import style from '../../styles/Home.module.css'

export function Footer(){

  return(<>
    <div className={style.footer}>
    <img src="/TransLink_Logo.svg" className={style.img}/>
    <p className={style.text}>
      Expoline Translink Map 
      <br/> 
      Clint Javillo
      <br />
      2023
    </p>
    </div>
    
  </>)
}