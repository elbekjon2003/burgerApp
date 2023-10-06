import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../components/burger.css'


const BurgerApp = () => {
    let [greens, setGreens] = useState(0)
    let [tomatoes, setTomatoes] = useState(0)
    let [cheese, setCheese] = useState(0)
    let [meats, setMeats] = useState(0)
    let [total, setTotal] = useState(0)
    

    

    return(
        <>
            <div className="header">
                <h1>Total price of the product is: ${Math.round(total*10)/10}</h1>
                <h2>You ordered burger with <span>{greens}</span> greens <span>{tomatoes}</span> tomatoes <span>{cheese}</span> cheese <span>{meats}</span> meats</h2>
            </div>
            <section>
                <div className="burger-parts">
                    <div className="baseOfBurger">
                        <h3>Ko'katlar <span>0.1$</span></h3>
                        <div className="part-btns">
                            <button onClick={() => {
                                greens++
                                setGreens(greens)
                                setTotal(total += 0.1)
                            }}>Add</button>
                            <button onClick={()=>{
                                if(greens !== 0){
                                    greens--
                                    setGreens(greens)
                                    setTotal(total-=0.1)
                                }
                            }}>Remove</button>
                        </div>
                    </div>
                    <div className="baseOfBurger">
                        <h3>Pomidor <span>0.4$</span></h3>
                        <div className="part-btns">
                            <button onClick={() => {
                                tomatoes++
                                setTomatoes(tomatoes)
                                setTotal(total += 0.4)
                            }}>Add</button>
                            <button onClick={()=>{
                                if(tomatoes !== 0){
                                    tomatoes--
                                    setTomatoes(tomatoes)
                                    setTotal(total-=0.4)
                                }
                            }}>Remove</button>
                        </div>
                    </div>
                    <div className="baseOfBurger">
                        <h3>Pishloq <span>0.6$</span></h3>
                        <div className="part-btns">
                            <button onClick={() => {
                                cheese++
                                setCheese(cheese)
                                setTotal(total += 0.6)
                            }}>Add</button>
                            <button onClick={()=>{
                                if(cheese !== 0){
                                    cheese--
                                    setCheese(cheese)
                                    setTotal(total-=0.6)
                                }
                            }}>Remove</button>
                        </div>
                    </div>
                    <div className="baseOfBurger">
                        <h3>Go'sht <span>1.2$</span></h3>
                        <div className="part-btns">
                            <button onClick={()=>{
                                meats++
                                setMeats(meats)
                                setTotal(total += 1.2)
                            }}>Add</button>
                            <button onClick={()=>{
                                if(meats !== 0){
                                    meats--
                                    setMeats(meats)
                                    setTotal(total-=1.2)
                                }
                            }}>Remove</button>
                        </div>
                    </div>
                </div>
                <div className="burger-img">
                    <img src="../images/burger1.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default BurgerApp