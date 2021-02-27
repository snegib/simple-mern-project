import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "../src/places/pages/NewPlace";
import UserPlaces from "../src/places/pages/UserPlaces";
import UpdatePlace from "../src/places/pages/UpdatePlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    <Route path="/:userId/places" exact>
                        <UserPlaces />
                    </Route>
                    <Route path="/places/new" exact>
                        <NewPlace />
                    </Route>
                    {/* order matters here, above we have /places/new so if we place /places/:placeID before the /places/new route then it might be interpetate :/placeId to new */}
                    <Route path="/places/:placeId">
                        <UpdatePlace />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
