"use client"
import { useEffect, useState } from "react";

const ComingSoon = () => {
  const startDate = new Date(2024, 0, 11); // 11 января
  const endDate = new Date(2024, 1, 9); // 9 февраля
  
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
    return (
        <>
        
        <div className='banner-buttons'>
          
          <div className='banner-card'>
         
              <div className='banner-card-QWE13S'>
                <div className='banner-card-QWE13B'></div>
                <div className="banner-gradient-bg"></div>
                <div className='timer-card-bg'>
                  
                  <div className="banner-inner">
                    <div className="banner-head">
                     {/* <div className="banner-title">До открытия</div> */}
                      <div className="timer-badge">#news</div> 
                    </div>
                    
                    <div className="banner-body-title">ДО ОТКРЫТИЯ</div>
                      
                    <div className="banner-footer">
                        
                      <div className='timer-box-bg'>
                        <div className="timer">
                          <div className="time">{timeRemaining.days}
                          <span>дней</span></div>
                          <div className="time">{timeRemaining.hours}
                          <span>часов</span></div>
                          <div className="time">{timeRemaining.minutes}
                          <span>минут</span></div>
                          <div className="time">{timeRemaining.seconds}
                          <span>секунд</span></div>
                        </div> 
                      </div>
                    

                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </>
    );
};

export default ComingSoon;