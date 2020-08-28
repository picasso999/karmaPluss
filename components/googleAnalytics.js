import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize("G-0FW20VWFK7")
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}