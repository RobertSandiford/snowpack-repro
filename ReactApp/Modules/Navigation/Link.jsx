
import PropTypes from 'prop-types'
import { moduleName } from './config.js'
import { find } from '~Routing/find.js'
import { ensureLeadingSlash } from '~Routing/ensureLeadingSlash.js'
import { AppComponent } from '~AppComponent'

// Link.propTypes = {
//     to: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired
// }

// todo , allow receiving path instead of to // huh?

// Link components requires either to (string) or route (route object)
export class Link extends AppComponent {

    //static tagName = 'Link'
    static static
    static propTypes = {
        to: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    }

    init() {

        let { to, route } = this.props

        if (isDev) {
            if ( to !== undefined && route !== undefined )
                throw (`${moduleName} Link error: pass 'to' or 'route', not both`)
            if ( to === undefined && ! route === undefined )
                throw (`${moduleName} Link error: pass 'to' or 'route'`)
        }

        if ( to !== undefined ) {
            route = find(to) // eslint-disable-line -- we return this var from useMemo, saving it
            // we can format 'to' here if we need to
            to = ensureLeadingSlash(to) // eslint-disable-line -- we will consume this var within useMemo
            if ( route === null || route.default ) throw (`${moduleName} Link error: route for ${to} not found`)
        } else {
            to = route.path
        }

        this.to = to
        this.clicked = route

        this.clicked = (event) => {
            event.preventDefault()
            this.goto(to, route)
        }
       
    }

    content() {
        return (
            <a href={this.to} className={this.props.className} onClick={this.clicked}>
                { this.props.children }
            </a>
        )
    }

    //styles = Sass`
    //    a
    //        cursor: pointer
    //`

}