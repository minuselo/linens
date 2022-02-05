import {Link, NavLink} from "react-router-dom";
import s from './breadcrumbs.module.css'
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = (props) => {

    const routes=[
        { path: '/', breadcrumb: 'Главная' },
        { path: '/categories', breadcrumb: 'Категории' },
        { path: 'categories/:category', breadcrumb: props.title },
    ]


    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <div className={s.breadcrumbs}>
            {breadcrumbs.map(({
                                  match,
                                  breadcrumb
                              },index) => (
                <span key={match.pathname}>
          <NavLink to={match.pathname}>{breadcrumb}{index==breadcrumbs.length-1?null:"/"}</NavLink>
        </span>
            ))}

        </div>
    )

}

export default Breadcrumbs;