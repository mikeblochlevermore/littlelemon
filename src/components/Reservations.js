import { useState } from "react"
import { fetchAPI, submitAPI } from "../Api"
import { useNavigate } from "react-router-dom";

function Reservations () {

    const occasions = ["Occasion", "Just hungry", "Birthday", "Anniversary", "Other"];

    const [name, setName] = useState('');
    const [approvedName, setapprovedName] = useState('');

    const [email, setEmail] = useState('');
    const [approvedEmail, setapprovedEmail] = useState('');

    const [date, setDate] = useState('');
    const [approvedDate, setapprovedDate] = useState('');

    const [time, setTime] = useState(['Select a Time']);
    const [availableTimes, setAvailableTimes] = useState(['Select a Date First']);
    const [approvedTime, setapprovedTime] = useState('');

    const [guests, setGuests] = useState('');
    const [approvedGuests, setapprovedGuests] = useState('');

    const [occasion, setOccasion] = useState('');
    const [approvedOccasion, setapprovedOccasion] = useState('');

    const [comments, setComments] = useState('');
    const [approvedComments, setapprovedComments] = useState('');

    function updateTimes (date) {
        setAvailableTimes(fetchAPI(date))
        return;
    }

    // The date is dispatched to App.js to get a list of available times for that day
    const handleDateChange = async (event) => {
        setDate(event.target.value);
        updateTimes(date)
        setapprovedDate('approved');
        // Call fetchAPI with the selected date
      };

    const handleNameChange = (event) => {
        setName(event.target.value);
        setapprovedName("approved");
      };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setapprovedEmail("approved");
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
        setapprovedTime("approved");
      };

      const handleGuestsChange = (event) => {
        setGuests(event.target.value);
        setapprovedGuests("approved");
      };

      const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
        setapprovedOccasion("approved");
      };

      const handleCommentsChange = (event) => {
        setComments(event.target.value);
        setapprovedComments("approved");
      };

    const navigate = useNavigate();

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log({name, email, date, time, guests, occasion, comments});
        const formData = {name, email, date, time, guests, occasion, comments}
        if (submitAPI(formData) === true)
        {navigate("/confirmed");}
        else {navigate("/Reservations");}
      };

    return (
        <div className="reservations">
            <h1 className="title">RESERVATIONS</h1>
            <div className="box">
                <form className="form" onSubmit={handleFormSubmit}>

                    <input
                        type="text"
                        id="name"
                        placeholder="Full Name"
                        onChange={handleNameChange}
                        className={approvedName}
                        required={true}
                    />

                    <input
                        type="text"
                        id="email"
                        required={true}
                        placeholder="Email"
                        onChange={handleEmailChange}
                        className={approvedEmail}
                    />

                        <input
                            type="date"
                            id="date"
                            required={true}
                            value={date}
                            onChange={handleDateChange}
                            className={approvedDate}
                            />

                        <select
                            key={date}
                            required={true}
                            onChange={handleTimeChange}
                            className={approvedTime}
                        >
                            {availableTimes.map(times =>
                                    <option key={times}>
                                    {times}
                                    </option>
                                )}
                        </select>

                        <input
                            type="number"
                            placeholder="Number of guests"
                            min="1"
                            max="10"
                            id="guests"
                            required={true}
                            onChange={handleGuestsChange}
                            className={approvedGuests}
                        />

                        <select
                            id="occasion"
                            onChange={handleOccasionChange}
                            className={approvedOccasion}
                        >

                        {occasions.map(occasion =>
                                    <option key={occasion}>
                                    {occasion}
                                    </option>
                                )}

                        </select>

                        <textarea
                            type="text"
                            rows="6"
                            id="comments"
                            placeholder="Comments"
                            onChange={handleCommentsChange}
                            className={approvedComments}
                        />

                    <button type="submit">Make Your reservation</button>
                </form>
            </div>
        </div>
    );
};

export default Reservations;