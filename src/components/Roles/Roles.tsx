import { Component } from "react";
import { IRolesResponse } from "./IRoles"
import styles from './Roles.module.css';

export class Roles extends Component<IRolesResponse> {
    constructor(props: IRolesResponse) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
            <h1>Roles</h1>
            <ul className={styles.ul}>
              {this.props.roles.map((role) => (
                <li key={role.id} className={styles.li}>
                  <p><b>Role operator:</b> {role.operator?.name || "Unknown"}</p>
                  <p><b>Inserted at:</b> {new Date(role.inserted_at).toLocaleString()}</p>
                  <p><b>Updated at:</b> {new Date(role.inserted_at).toLocaleString()}</p>
                  <p><b>Role name:</b> {role.name}</p>
                  <ul className={styles.sublist}>
                    <li>
                      <p><b>User name that has this role:</b> {role.users?.map(user => user.login).join(", ") || <i>None</i>} </p>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        );
    }
}

