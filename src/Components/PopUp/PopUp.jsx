import style from './PopUp.module.css'

const PopUp = ({children, popUp}) => {


    if(popUp)
    return (
        <div className={style.popup}>
            {children}
        </div>
  )
}

export default PopUp
