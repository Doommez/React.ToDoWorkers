
import AppInfo from "../app-info/app-info";
import "./app.css";
import SeachPanal from "../search-panel/search-panel";
import AppFilter from "../app-fiter/app-filter";
import EployerList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";


function App(){

  const data=[
    {name:"Jhone S." ,salary:800,increase:false,id:1},
    {name:"Alex M." ,salary:3000,increase:true,id:2},
    {name:"Carl W." ,salary:5500,increase:false,id:3}
  ]


  return(
    <div className="app">
      <AppInfo/>
      <div className="search-panal">
          <SeachPanal/>
          <AppFilter/>
      </div>
     <EployerList data={data}/>
     <EmployeesAddForm/>
    </div>
   


  )
}


export default App