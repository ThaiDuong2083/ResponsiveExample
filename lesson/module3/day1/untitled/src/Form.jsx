import "./form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useState} from "react";

function FormComponent() {
    const [inputValues, setInputValues] = useState({
        name: "",
        quantity: 0,
        phone: "",
        date: new Date(),
        address: "",
        type: "",
        checkbox: false});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInputValues(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValues.checkbox === false|| validate() == false) {
            return;
        }
        alert("Dữ liệu đã nhập: "+ JSON.stringify(inputValues));
    }

    function validate(){
        try {
            for (const key in inputValues) {
                if (inputValues[key] === "" || inputValues[key] == null) {
                    throw ("Vui lòng nhập đầy đủ các trường!")
                }
            }
        }catch(err){
            alert(err);
            return false;
        }
    }
    return (
        <>
            <form className={"bg-light"} onSubmit={(e) => handleSubmit(e)}>
                <div className="text-center">
                    <h2>Liên hệ đặt tiệc</h2>
                    <span style={{fontSize: "10px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry type and scrambled it to
                    make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                </div>
               <div className={"row d-flex justify-content-center align-items-center"}>
                   <div className="mb-3 col-5">
                       <label htmlFor="exampleInputEmail1" className="form-label">Họ và tên</label>
                       <input
                           type="text"
                           className="form-control"
                           name="name"
                           value={inputValues.name}
                           onChange={handleChange}
                           placeholder="Nhập họ và tên"
                       />
                   </div>
                   <div className="mb-3 col-5">
                       <label htmlFor="exampleInputEmail1" className="form-label">Số lượng khách</label>
                       <input
                           type="number"
                           className="form-control"
                           name="quantity"
                           value={inputValues.quantity}
                           onChange={handleChange}
                       />                   </div>
                   <div className="mb-3 col-5">
                       <label htmlFor="exampleInputEmail1" className="form-label">Số điện thoại</label>
                       <input
                           type="text"
                           className="form-control"
                           name="phone"
                           value={inputValues.phone}
                           onChange={handleChange}
                       />                   </div>
                   <div className="mb-3 col-5">
                       <label htmlFor="exampleInputEmail1" className="form-label">Ngày tổ chức sự kiện</label>
                       <input
                           type="date"
                           className="form-control"
                           name="date"
                           value={inputValues.date}
                           onChange={handleChange}
                       />                   </div>
                   <div className="mb-3 col-5">
                       <label htmlFor="exampleInputEmail1" className="form-label">Địa chỉ</label>
                       <input
                           type="text"
                           className="form-control"
                           name="address"
                           value={inputValues.address}
                           onChange={handleChange}
                       />                   </div>
                   <div className="mb-3 col-5">
                       <label htmlFor="exampleInputEmail1" className="form-label">Loại sự kiện</label>
                       <input
                           type="text"
                           className="form-control"
                           name="type"
                           value={inputValues.type}
                           onChange={handleChange}
                       />                   </div>
                   <div className="mb-3 col-10">
                       <input
                           type="checkbox"
                           name="checkbox"
                           className="form-check custom-checkbox form-check-inline mb-0"
                           checked={inputValues.checkbox}
                           onChange={handleChange}
                       />
                       Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khẩu,...)
                   </div>
                   <button type="submit" className="btn-custom btn btn-primary w-25">Submit</button>
               </div>
            </form>
        </>
    )
}

export default FormComponent;