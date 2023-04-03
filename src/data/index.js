import { path } from '../utils/paths'
import dashboard from '../assets/icons/dashboard.svg'
import graph from '../assets/icons/graph.svg'
import notification from '../assets/icons/notification.svg'
import stack from '../assets/icons/stack.svg'
import bot from '../assets/icons/bot.svg'
import signal from '../assets/icons/signal.svg'

export const links = [
    {
        icon: dashboard,
        label: "Dashboard",
        route: path.DASHBOARD,
    },
    {
        icon: graph,
        label: "Analytics",
        route: path.ANALYTICS,
    },
    {
        icon: stack,
        label: "Positions",
        route: path.POSITIONS,
    },
    {
        icon: notification,
        label: "Notifications",
        route: path.NOTIFICATIONS,
    },
    {
        icon: bot,
        label: "Bots",
        route: path.BOTS,
    },
    {
        icon: signal,
        label: "Signal Groups",
        route: path.SIGNALGROUPS,
    },
]