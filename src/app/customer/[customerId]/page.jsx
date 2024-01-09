'use client'
import Back from "@/app/UI/BackButton/BackButton";
import { useState } from "react";
import SavedButton from '@/app/UI/MainButton/SavedButton'
import { useParams } from 'next/navigation';

const CustomerId = () => {
    const params = useParams();
    const { userId } = params;
    console.log(`this customerID: ${userId}`)
    const url = `https://cdn.zipperconnect.space/customer/settings/client/photo/${userId}`;
    const username = (null)
    const [form, setForm] = useState({
        fullName: '',
        address: '',
        city: '',
        phone: '',
    })
    const [isEditing, setIsEditing] = useState(true);
    const handleEdit = () => {
        setIsEditing(false);
    }

    const handleSaveClick = () => {
        setIsEditing(true)
    }

    const handleChange = (e) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log([e.target.name])
    }

    const handlePhoneNumberInput = (e) => {
        const inputValue = e.target.value;
        // Удалить все символы, кроме цифр
        const digitsOnly = inputValue.replace(/\D/g, '');
      
        if (digitsOnly.length >= 11) {
          // Ограничить номер 11 цифрами
          const formattedNumber = `+${digitsOnly.slice(0, 1)}(${digitsOnly.slice(1, 4)})-${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 9)}-${digitsOnly.slice(9, 11)}`;
          
          // Обновите состояние form с новым номером телефона
          setForm(prevForm => ({
            ...prevForm,
            phone: formattedNumber
          }));
        } else {
          // Обновите состояние form с номером телефона без форматирования
          setForm(prevForm => ({
            ...prevForm,
            phone: digitsOnly
          }));
        }
      };
     
    return (
        <>
        <Back/>
     {isEditing ? (
      <>
        <div className="profile-header">
            <div className="profile-avatar-box">
                <div className="profile-avatar-transparent">
                    <div className="profile-avatar">
                    
                        <div className="profile-avatar">
                          <img src={url} className="usercard_avatar_img"/>
                        </div>
          
                    </div>
                    <div className="profile-name">Евгений</div>
                    <footer>{`id:${userId}` || 'Не указан'}</footer>
                </div>
            </div> 
        </div>
             <div className="profile-data">
              <div className='profile-data-title'>
                    Данные доставки
                </div>
                <div className="profile-data-info">
                  <span>ФИО</span>
                  <span className="profile-data-text">{form.fullName || 'Не указан'}</span>
                </div>
                <div className="profile-data-info">
                  <span>Телефон</span>
                  <span className="profile-data-text">{form.phone || 'Не указан'}</span>
                </div>
                <div className="profile-data-info">
                  <span>Город</span>
                  <span className="profile-data-text">{form.city || 'Не указан'}</span>
                </div>
                <div className="profile-data-info">
                  <span>Адрес доставки</span>
                  <span className="profile-data-text">{form.address || 'Не указан'}</span>
                </div>

                <button className="btn-profile-data-info btn-profile-data" onClick={handleEdit} >
                Редактировать</button>             
             </div>
              <div className="profile-data">
              <div className='profile-data-title'>
                    Помоги нам
                    <span style={{marginLeft: '5px'}}>✍🏻 </span>
                </div>
                <div className="profile-data-info">
                <span style={{marginLeft: '5px', textAlign:'left'}}>Напиши, что улучшить и получи бонус!

                  </span>
                </div>

                <button className="btn-profile-data-info btn-profile-data">
                Написать</button>             
             </div>
             
             </>
              ) : (
              <>
              <div className="profile-data">
              <div className='profile-data-title'>
                  Данные доставки
              </div>
                <div className="profile-data-info">
                  <h2>Вид доставки</h2>
                </div>
                <div className="delivery-type-input">
                
                  <button
                   className={`button-delivery`}  
                  >
                  {form.address === 'pickup' && (
                    <span className="delivery-type-item-outline">
                  <svg width="135" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="134" height="99" rx="19.5" stroke="url(#outline_svg__a)"></rect>
                      <defs><radialGradient id="outline_svg__a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-38.951 123.34 28.893) scale(146.314 152.629)">
                        <stop stopColor="#EB9C00"></stop>
                        <stop offset="0.271" stopColor="#FF4769"></stop>
                        <stop offset="0.664" stopColor="#3D50FF"></stop>
                        <stop offset="1" stopColor="#00B3FF"></stop>
                        </radialGradient></defs>
                  </svg>
                 </span>
                 )}
                    <div className="delivery-type-item-content">
                      <div className="delivery-type-title">
                        Самовывоз <br/>из ПВЗ
                      </div>
                      <div className='bg-delivery-type'></div>
                      <div className="delivery-type-image">
                        <img src="../img/svg/bx4bg.png" alt="" />
                        
                      </div>
                      
                    </div>
                  </button>
                  
                </div>
                 <div className="profile-data-info">
                  <h2>Данные получателя</h2>
                </div>
                 <div className="profile-select-info">
                    <div className="profile-select-input">
                      <label className="profile-select-label">
                        Город
                      </label>
                      <input
                        type="text"
                        className="profile-search-value"
                        name="city"
                        onChange={handleChange}
                      />
                       <div className="profile-select-info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right">
                          <path d="M9 6l6 6l-6 6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                <div className="profile-select-info">
                    <div className="profile-select-input">
                      <label className="profile-select-label">
                        Адрес доставки
                      </label>
                      <input
                        type="text"
                        className="profile-search-value"
                        name="address"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                <div className="profile-select-info">
                
                  <div className="profile-select-input">
                    <label className="profile-select-label">Фамилия, имя и очетство</label>
                    <input 
                    type="text" 
                    className="profile-search-value" 
                    name="fullName" 
                    onChange={handleChange}
                    />
                    <div className="profile-select-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right">
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                      </div>
                  </div>
                  <div className="profile-select-input">
                    <label className="profile-select-label">Телефон</label>
                    <input 
                    type="text" 
                    className="profile-search-value" 
                    name="phone" 
                    value={form.phone} 
                    onChange={handlePhoneNumberInput} 
                    />
                    <div className="profile-select-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right">
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                      </div>
                  </div>
                </div>
            </div>

            {/* 
            <div className="main-button">
              <button onClick={handleSaveClick}>Сохранить</button>
            </div>
            */}
            <SavedButton handleSaveClick={handleSaveClick} />
            </>
            )}
              </>
    );
};

export default CustomerId;