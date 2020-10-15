import React from 'react'

const UserSubLayout = (props) => (
    <div className="user-sub-layout">
        <aside>
            <UserNav />
        </aside>
        <div>
            <Switch>
                <Route path={props.match.path} exact component={UsersList} />
                <Route path={`${props.match.path}:userId`} component={UserProfilePage} />
            </Switch>
        </div>
    </div>
)