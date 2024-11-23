import fetchCardByImage from "../api/fetchCardByImage.js";
import clog from "../Utils/logdata.js";
import { ce } from "../Utils/create-element.js";
import getAdiddasProductsList from "../api/addidas.api.js";
import cardElement from "../components/card.js";
import {router} from "../routes/router.js";
function createSize(product){
  let sizeContainer=ce("div",{
    className:"w-full flex flex-row justify-center items-center gap-2"
  });
  product.size.forEach(sizeNum=>{
     let sizeElem=ce("div",{
      className:"rounded-full w-5 h-5 p-3 border-solid border-2 border-slate-800 flex justify-center items-center",
      children:[ce("p",{
        innerText:sizeNum,
        className:"text-xs font-bold"
      })]
    });
     sizeContainer.appendChild(sizeElem);
  })
  return sizeContainer;
}

