import { useState,useEffect, HtmlHTMLAttributes } from "react";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./CityForm.css";
import { City } from "./City";
import { Navigate, useNavigate } from "react-router-dom";


const CityForm: React.FC = () =>{

    
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const [cities, setCities] = useState<City[]>([]);
    const [formData, setFormData] = useState<City>({
        CityCode: "",
        CityName: "",
        CityDescription: "",
        IsActive:true
      });

      useEffect(() => {
        fetchAllCities();
      }, []);

      const fetchAllCities = async ()=>{

        try{
        const allcities = await axios.get<City[]>(`http://localhost:5000/api/city/all`);
        setCities((allcities).data);
        console.log(allcities.data);
        }
        catch{
        console.error("Error in fetching data");

        }
      }

    const handleEditClick = async (city: City) =>{
        setIsEditing(true);
        setFormData(city);    
        toast.success(city.CityName +" is going to be update");

    }

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;

        setFormData((previousData) => ({
        ...previousData,
        [name]: value, 
    }));
    }

    const handleDeleteClick = async (city: City) =>{
        try{
            var confirmation = window.confirm("Do you want to delete "+ city.CityName+" ?");
            if(!confirmation)return
          city.IsActive=false;
          //setFormData(city);
          var res = axios.post(`http://localhost:5000/api/city/delete`,city);
          fetchAllCities();
          toast.success("City has been deleted !");
        }
        catch(error){
            toast.error("Error on deleting" + city.CityName);
            console.log(error);
        }
    }
    const handleSaveCity = async() => {
        try{
       var res= await axios.post(`http://localhost:5000/api/city/save`,formData);
       fetchAllCities();
        toast.success("city saved successfully !");
        }
        catch(error)
        {
        toast.error("Error on saving city.");
            console.log(error);
        }
    }

    const handleLogout = async() => {
        console.log("logout called");
        localStorage.removeItem("UserSession");
        navigate("../login");
    }

    return (
        <><div>
            <button onClick={handleLogout} style={{ float: "right", marginRight: "10px" ,marginTop:"5px"}}>
                Logout
            </button>
        </div><div className="city-management-container">
                <h2>City Management</h2>

                {/* Form Panel */}
                <div className="form-panel">

                    <input
                        type="text"
                        name="CityCode"
                        placeholder="City Code"
                        value={formData.CityCode}
                        onChange={handleInputChange} />
                    <input
                        type="text"
                        name="CityName"
                        placeholder="City Name"
                        value={formData.CityName}
                        onChange={handleInputChange} />
                    <input
                        type="text"
                        name="CityDescription"
                        placeholder="City Description"
                        value={formData.CityDescription}
                        onChange={handleInputChange} />
                    <button onClick={handleSaveCity} className="save-button">
                        {isEditing ? "Update City" : "Add City"}
                    </button>
                </div>

                {/* Grid View Container */}
                <div className="grid-view-container">
                    <table className="city-grid">
                        <thead>
                            <tr>
                                <th>City Code</th>
                                <th>City Name</th>
                                <th>City Description</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cities.map((city) => (
                                <tr key={city.CityId}>
                                    <td>{city.CityCode}</td>
                                    <td>{city.CityName}</td>
                                    <td>{city.CityDescription}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(city)} className="edit-button">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteClick(city)} className="edit-button">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div></>
      );
}

export default CityForm;