import React, { useEffect, useState } from 'react';


function BorrowerManangement() {
    useEffect(() => {
        fetchItems();
    });

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/borrowermanagement');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            <div class="container">
                <h1 class = "mt-5"></h1>
                <form method="POST" action="/addBorrower">
                    <div className="form-group form-inline">     
                        <label for="ssn"><span>Ssn:</span></label>
                        <input type="text" name="ssnInput" class="form-control" />    
                        <label for="first_name"><span>First Name:</span></label>
                        <input type="text" name="fnameInput" class="form-control" />
                        <label for="last_name"><span>Last Name:</span></label>
                        <input type="text" name="lnameInput" class="form-control" />
                        <label for="email"><span>Email:</span></label>
                        <input type="text" name="emailInput" class="form-control" />
                        <label for="address"><span>Address:</span></label>
                        <input type="text" name="addressInput" class="form-control" />
                        <label for="city"><span>City:</span></label>
                        <input type="text" name="cityInput" class="form-control" />
                        <label for="state"><span>State:</span></label>
                        <input type="text" name="stateInput" class="form-control" />
                        <label for="phone"><span>Phone:</span></label>
                        <input type="text" name="phoneInput" class="form-control" />
                        
                    </div>
                    <input type="submit" value="Submit" class="btn btn-primary mb-2" />
                </form>
            </div>
        </section>
    );
}

export default BorrowerManangement;