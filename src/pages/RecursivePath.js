import { useEffect } from "react";

import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
  ];
  
function find(id) {
    return PEEPS.filter(p => p.id === id);
}

export default function Person(props) {
    let { url } = useRouteMatch();
    let { id } = useParams();
    let person = find(parseInt(id));

    useEffect(()=>{
      window.previousLocation = props.location;
    },[])

    return (
      <div>
        <h3>{person[0].name}’s Friends</h3>
  
        <ul>
            {person[0].friends.map(id => (
            <li key={id}>
                <Link to={`${url}/${id}`}>{find(id)[0].name}</Link>
            </li>
            ))}
        </ul>
  
        <Switch>
          <Route path={`${url}/:id`}>
            <Person />
          </Route>
        </Switch>
      </div>
    );
  }
  
