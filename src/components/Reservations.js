import {useState} from "react";

function Reservations ({ availableTimes, dispatch }) {

    const occasions = ["Occasion", "Just hungry", "Birthday", "Anniversary", "Other"];

    const [name, setName] = useState('');
    const [approvedName, setapprovedName] = useState('');

    const [email, setEmail] = useState('');
    const [approvedEmail, setapprovedEmail] = useState('');

    const [date, setDate] = useState('');
    const [approvedDate, setapprovedDate] = useState('');

    const [time, setTime] = useState('');
    const [approvedTime, setapprovedTime] = useState('');

    const [guests, setGuests] = useState('');
    const [approvedGuests, setapprovedGuests] = useState('');

    const [occasion, setOccasion] = useState('');
    const [approvedOccasion, setapprovedOccasion] = useState('');

    const [comments, setComments] = useState('');
    const [approvedComments, setapprovedComments] = useState('');


    // The date is dispatched to App.js to get a list of available times for that day
    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch(date);
        setapprovedDate("approved");
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

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log({name, email, date, time, guests, occasion, comments});
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
                            id="time"
                            required={true}
                            onChange={handleTimeChange}
                            className={approvedTime}
                        >
                            {
                                // Note the availableTimes data is accessed via props from the App.js component
                            }
                            {availableTimes.map(time =>
                                    <option key={time}>
                                    {time}
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