import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../components/Menu.style.css";
import Modal from "react-awesome-modal";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const MenuSection = () => {

    const [selectedList,setSelectedList]=useState([]);
    const [categoryDropDown,setCategoryDropDown]=useState(false);
    const [cocktailName, setCocktailName] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cocktailDetail, setCocktailDetail] = useState([]);
    const [singleDrinkDetails, setSingleDrinkDetails] = useState(false);
    const [cocktailsSuggestion, setCocktailsSuggestion] = useState(false);
    const [selectedCategory,setSelectedCategory]=useState("Cocktails");



    const notify = () => toast.success("Added Successfully");



    const displayCategory = async (item) => {
        let res = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?"+item+"=list");
        //   console.log("coctails",res.data.drinks);
        setSelectedList(res.data.drinks);    
      };

      const displayMenu = async (item,selectedCtegory) => {
        let res = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?"+item+"="+selectedCtegory
        );
          console.log("coctails",res.data.drinks);
        setCocktailName(res.data.drinks);
      };

      const filterCocktails = cocktailName?.filter((data) =>
    data.strDrink.toLowerCase().includes(searchValue.toLowerCase())
  );

  const displayStartingMenu = async () => {
    let res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Cocktail"
    );
      console.log("coctails",res.data.drinks);
    setCocktailName(res.data.drinks);
  };
  

  const getDetails = async (itemId) => {
    let res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + itemId
    );

    console.log(res.data.drinks);
    setCocktailDetail(res.data.drinks);
  };


useEffect(()=>{
    displayStartingMenu();
},[])
    
    return (
        <div className="menue-section">
            <Modal
        width="80%"
        zindex="9999"
        visible={singleDrinkDetails}
        onClickAway={() => {
          setSingleDrinkDetails(false);
        }}>
        {cocktailDetail?.map((data) => (
          <div className="single-drink-detail">
            <div className="top-div">
              <img src={data.strDrinkThumb} alt={data.strDrink + " img"} />
              <div className="top-div-details">
                <h4 className="drink-name">{data.strDrink}</h4>
                <h4 className="alcohol-type">{data.strAlcoholic}</h4>
              </div>
              <button onClick={ notify} >+ Add </button>
            </div>
            <hr></hr>
            <div className="details">
              <h4>
                <i class="fa-solid fa-check"></i> Creative Commons approved :{" "}
                {data.strCreativeCommonsConfirmed}
              </h4>
              <h4>
                <i class="fa-solid fa-martini-glass"></i> served in{" "}
                {data.strGlass}
              </h4>
              <h4>
                <i class="fa-solid fa-bell-concierge"></i> Made with
              </h4>
              <div className="ingredients">
                <h5>{data.strIngredient1}</h5>
                <h5>{data.strIngredient2}</h5>
                <h5>{data.strIngredient3}</h5>
                <h5>{data.strIngredient4}</h5>
                <h5>{data.strIngredient5}</h5>
                <h5>{data.strIngredient6}</h5>
                <h5>{data.strIngredient7}</h5>
                <h5>{data.strIngredient8}</h5>
                <h5>{data.strIngredient9}</h5>
                <h5>{data.strIngredient10}</h5>
                <h5>{data.strIngredient11}</h5>
                <h5>{data.strIngredient12}</h5>
                <h5>{data.strIngredient13}</h5>
                <h5>{data.strIngredient14}</h5>
                <h5>{data.strIngredient15}</h5>
              </div>
              <h4>
                <i class="fa-solid fa-clipboard-list"></i> Instructions
              </h4>
              <h4 className="ingredients">
                <h5>{data.strInstructions}</h5>
                <h5>{data.strInstructionsDE}</h5>
                <h5>{data.strInstructionsES}</h5>
                <h5>{data.strInstructionsFR}</h5>
                <h5>{data.strInstructionsIT}</h5>
              </h4>
              <h4>
                <i class="fa-solid fa-wine-glass"></i> {data.strMeasure1}
              </h4>
              <h4>{data.strTags}</h4>
            </div>
          </div>
        ))}
      </Modal>
            <div data-aos="flip-up" className="left-side-menu">
                <p>Filter By :</p>
                <hr></hr>
                <p
                className="ctegory-div"
                 onClick={()=>{displayCategory("c"); setCategoryDropDown(!categoryDropDown); }}>
                    <p className="category-title"><i class="fa-solid fa-window-restore"></i>Categories</p>
                <div className="drink-category">
                {categoryDropDown && 
            
                selectedList?.map((item)=>(
                    <p className="single-drink"
                    onClick={()=>{displayMenu("c",item.strCategory);
                                setSelectedCategory(item.strCategory);
                            }} 
                    >{item.strCategory}</p>
                    ))
            
                }
                </div>                
                </p>
                <hr></hr>
                <p
                className="ctegory-div"
                 onClick={()=>{displayCategory("g"); setCategoryDropDown(!categoryDropDown); }}>
                                        <p className="category-title"><i class="fa-solid fa-martini-glass-citrus"></i>Glasses</p>

                <div className="drink-category">
                {categoryDropDown && 
            
                selectedList?.map((item)=>(
                    <p className="single-drink"
                    onClick={()=>{displayMenu("g",item.strGlass);
                    setSelectedCategory(item.strGlass);

                }} 
                    >{item.strGlass}</p>
                    ))
            
          }
                </div>                
                </p>
                <hr></hr>
                <p
                className="ctegory-div"
                 onClick={()=>{displayCategory("i"); setCategoryDropDown(!categoryDropDown); }}>
                    
                    <p className="category-title"><i class="fa-solid fa-bell-concierge"></i>Ingredients</p>
                <div className="drink-category">
                {categoryDropDown && 
            
                selectedList?.map((item)=>(
                    <p 
                    className="single-drink"
                    onClick={()=>{displayMenu("i",item.strIngredient1);
                    setSelectedCategory(item.strIngredient1);

                }} 
                    >{item.strIngredient1}</p>
                    ))
            
          }
                </div>                
                </p>
                <hr></hr>
                <p
                className="ctegory-div"
                 onClick={()=>{displayCategory("a"); setCategoryDropDown(!categoryDropDown); }}>
                    
                    <p className="category-title"><i class="fa-solid fa-wine-bottle"></i>Alcoholic Filter</p>
                <div className="drink-category">
                {categoryDropDown && 
            
                selectedList?.map((item)=>(
                    <p 
                    className="single-drink"
                    onClick={()=>{displayMenu("a",item.strAlcoholic);
                    setSelectedCategory(item.strAlcoholic);

                }} 
                    >{item.strAlcoholic}</p>
                    ))
            
          }
                </div>                
                </p>
            </div>
            <div className="right-side-menu">
                <div className="search-div">
                <i class="fa-solid fa-magnifying-glass"></i>

                    <input
                                  placeholder="Search..."

                     value={searchValue}
                     onChange={(e) => {
                       setSearchValue(e.target.value);
                     }}
                    type="text"
                    onClick={() => {
                        setCocktailsSuggestion(true);
                      }}
                    />
                    
            {cocktailsSuggestion && (
              <div className="cocktails-suggestion">
                {filterCocktails?.map((item) => (
                  <div>
                    <p
                      onClick={() => {
                        setSearchValue(item.strDrink);
                        setCocktailsSuggestion(false);
                      }}>
                      {item.strDrink}
                    </p>
                  </div>
                ))}
              </div>
            )}
                </div>

                <h1 >{selectedCategory}</h1>

                <div className="display-items">
                    
                    {filterCocktails?.map((item) => (
                        <div data-aos="fade-up"
                        data-aos-duration="2000" 

                        className="cocktail-menu"
                        onClick={() => {
                        
                        setTimeout(() => {
                            setSingleDrinkDetails(true);
                          }, 400);
                    
                        getDetails(item.idDrink);
                    }}>
                    <img
                    
                    src={item.strDrinkThumb} alt={item.strDrink + "img"} />
                    
                    < span 
                    >{item.strDrink}</span>
              
                    <button onClick={()=>{          
                        setTimeout(() => {
                            setSingleDrinkDetails(true);
                          }, 900);
                        notify(); 
                    }} className="add-button">+ Add </button>
              
                </div>
                ))}
                
                

                </div>
            </div>
            {cocktailsSuggestion && (
        <div
          className="overlay"
          onClick={() => {
            setCocktailsSuggestion(false);
          }}></div>
      )}
      {/* {categoryDropDown &&(
        <div
          className="overlay2"
          onClick={() => {
            setCategoryDropDown(false);
          }}></div>      )} */}
        </div>
    );
};
export default MenuSection;