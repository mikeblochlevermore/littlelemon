import { render, screen } from "@testing-library/react";
import Reservations from './components/Reservations';
import App from './App'

const availableTimes = ["Select a Time", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test('Renders the BookingForm heading', () => {

    render(<Reservations availableTimes={availableTimes}/>);
    const headingElement = screen.getByText("RESERVATIONS");
    expect(headingElement).toBeInTheDocument();
})

test('Initialize times produces the expected value', () => {

    render(<Reservations availableTimes={availableTimes}/>);
    const timesSelector = screen.getByText("17:00");
    expect(timesSelector).toBeInTheDocument();
})