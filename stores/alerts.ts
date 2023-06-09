// store/alerts.ts
import { stat } from "fs";
import { defineStore } from "pinia";

export const useAlertsStore = defineStore({
    id: "alerts",
    state: () => {
        return {
            alerts: [] as any[],
            beacons: [
                {
                    id: 1,
                    text: "Un cerf a été entendu",
                    title: "Cerf",
                    page: "cerf",
                    icon: "fas fa-deer",
                    isAnimal: true,
                    duration: 5,
                },
                {
                    id: 2,
                    text: "Attention, coup de feu entendu",
                    title: "Coup de feu chasseur",
                    page: "coup-de-feu-chasseur",
                    icon: "fas fa-bullseye",
                    isAnimal: false,
                    duration: 1,
                },
                {
                    id: 3,
                    text: "Un loup a été entendu",
                    title: "Loup",
                    page: "loup",
                    icon: "fas fa-paw",
                    isAnimal: true,
                    duration: 5,
                },
                {
                    id: 4,
                    text: "Une moto cross a été entendue",
                    title: "Moto cross",
                    page: "moto-cross",
                    icon: "fas fa-motorcycle",
                    isAnimal: false,
                    duration: 1,
                },
                {
                    id: 6,
                    text: "Un renard a été entendu",
                    title: "Renard",
                    page: "renard",
                    icon: "fas fa-fox",
                    isAnimal: true,
                    duration: 5,
                },
            ],
            categories: [
                {
                    id: 1,
                    title: "Point d'intérêt",
                    icon: "fas fa-star",
                    color: "#D9D9FF",
                    reportings: [
                        { id: 1, title: "Point de vue", icon: "fas fa-eye", duration: -1 },
                        { id: 2, title: "Sommet", icon: "fas fa-mountain", duration: -1 },
                        { id: 3, title: "Campement", icon: "fas fa-campground", duration: -1 },
                        { id: 4, title: "Point Info", icon: "fas fa-info", duration: -1 },
                        { id: 5, title: "Point d'intérêt", icon: "fas fa-star", duration: -1 },
                    ],
                },
                {
                    id: 2,
                    title: "Obstacle",
                    icon: "fas fa-exclamation-triangle",
                    color: "#FFD9B3",
                    reportings: [
                        { id: 6, title: "Eboulement", icon: "fas fa-mountain", duration: 5 },
                        { id: 7, title: "Avalanche", icon: "fas fa-snowflake", duration: 7 },
                        { id: 8, title: "Inondation", icon: "fas fa-water", duration: 6 },
                        { id: 9, title: "Arbre", icon: "fas fa-tree", duration: 3 },
                        { id: 10, title: "Obstacle", icon: "fas fa-exclamation-triangle", duration: 4 },
                    ],
                },
                {
                    id: 3,
                    title: "Zone sensible",
                    icon: "fas fa-exclamation",
                    color: "#FFB3B3",
                    reportings: [
                        { id: 11, title: "Travaux", icon: "fas fa-tools", duration: 5 },
                        { id: 12, title: "Zone de reproduction", icon: "fas fa-egg", duration: 10 },
                        { id: 13, title: "Zone de nidification", icon: "fas fa-feather", duration: 8 },
                        { id: 14, title: "Zone sensible", icon: "fas fa-exclamation", duration: 6 },
                    ],
                },
                {
                    id: 4,
                    title: "Danger",
                    icon: "fas fa-skull-crossbones",
                    color: "#FFB3FF",
                    reportings: [
                        { id: 15, title: "Abattage", icon: "fas fa-tree", duration: 3 },
                        { id: 16, title: "Animal sauvage", icon: "fas fa-paw", duration: 2 },
                        { id: 17, title: "Incendie", icon: "fas fa-fire", duration: 2 },
                        { id: 18, title: "Nid insecte", icon: "fas fa-bug", duration: 4 },
                        { id: 19, title: "Chasse", icon: "fas fa-hiking", duration: 1 },
                        { id: 20, title: "Danger", icon: "fas fa-skull-crossbones", duration: 5 },
                    ],
                },
                {
                    id: 5,
                    title: "Animal",
                    icon: "fas fa-paw",
                    color: "#B3FFB3",
                    reportings: [
                        { id: 21, title: "Animal blessé", icon: "fas fa-first-aid", duration: 1 },
                        { id: 22, title: "Animal mort", icon: "fas fa-skull", duration: 2 },
                        { id: 23, title: "Animal en détresse", icon: "fas fa-sad-tear", duration: 3 },
                        { id: 24, title: "Chien", icon: "fas fa-dog", duration: 2 },
                        { id: 25, title: "Chat", icon: "fas fa-cat", duration: 2 },
                        { id: 26, title: "Animal", icon: "fas fa-paw", duration: 2 },
                    ],
                },
                {
                    id: 6,
                    title: "Pollution",
                    icon: "fas fa-trash-alt",
                    color: "#B3B3FF",
                    reportings: [
                        { id: 27, title: "Liquide", icon: "fas fa-tint", duration: 4 },
                        { id: 28, title: "Encombrant", icon: "fas fa-couch", duration: 6 },
                        { id: 29, title: "Déchet", icon: "fas fa-trash-alt", duration: 3 },
                        { id: 30, title: "Décharge sauvage", icon: "fas fa-dumpster", duration: 7 },
                    ],
                },
            ],
            selectCategory: null as any,
        }
    },
    actions: {
        addAlert(category: any, reporting: any, user: any, longitude: any, latitude: any, isOpened = true) {
            if (category == 1) isOpened = true;
            this.alerts.push({
                category: category,
                reporting: reporting,
                user: user,
                longitude: longitude,
                latitude: latitude,
                isOpened: isOpened,
                status: "marker",
            });
        },
        addBeaconAlert(reporting: any, location: any, isOpened = true) {
            this.alerts.push({
                reporting: reporting,
                location: location,
                isOpened: isOpened,
                status: "beacon-reconition",
            });
        },
        setAlerts(alerts: any[]) {
            for (let i = 0; i < alerts.length; i++) {
                if (alerts[i].category == 1) alerts[i].isOpened = true;
                else alerts[i].isOpened = false;
            }
            this.alerts = alerts
        },
        setSelectCategory(category: any) {
            this.selectCategory = category;
        },
        setUnselectCategory() {
            this.selectCategory = null;
        },
        generateHtmlMarker(alert: any) {
            const el = document.createElement("div");
            el.className = "alert-marker";

            const icon = document.createElement("i");
            const categoryUI = this.getCategoryUI(alert.category);
            const signalementUI = this.getAlertUI(alert.reporting);

            if (signalementUI) icon.className = signalementUI.icon;
            if (categoryUI) icon.style.backgroundColor = categoryUI.color;
            el.appendChild(icon);

            const svgWidth = 35;
            const svgHeight = 27;
            el.innerHTML +=
                '<svg xmlns="http://www.w3.org/2000/svg" width="' +
                svgWidth +
                '" height="' +
                svgHeight +
                '" viewbox="0 0 ' +
                svgWidth +
                " " +
                svgHeight +
                '">' +
                '<path d="M1.61776 13.049H12.6125C13.0145 13.049 13.3748 13.3017 13.5001 13.6782L17.2537 26.5822C17.4156 27.1393 18.2143 27.1393 18.3762 26.5822L22.1299 13.6782C22.2551 13.3017 22.6154 13.049 23.0174 13.049H33.3909C34.4872 13.049 35.2651 11.9866 34.9153 10.9602L31.4331 0.634932C31.2556 0.103711 30.6344 -0.149004 30.1279 0.0985553L26.0819 2.0945C23.4194 3.40966 20.4801 4.09561 17.4991 4.09561C14.5181 4.09561 11.5841 3.40966 8.91629 2.0945L4.87025 0.0985553C4.36385 -0.154162 3.74258 0.0985538 3.56508 0.634932L0.0828799 10.9602C-0.261686 11.9866 0.510976 13.049 1.60732 13.049H1.61776Z" fill="white"/>' +
                "</svg>";
            return el;
        },
        setAlertAsOpen(alert: any) {
            alert.isOpened = true;
        }
    },
    getters: {
        getAlerts: state => state.alerts.filter((alert: any) => {
            // return true if alert is not expired
            const now = new Date();
            const alertDate = new Date(alert.created_at);
            const diff = Math.abs(now.getTime() - alertDate.getTime());
            const diffDays = Math.floor(diff / (1000 * 3600 * 24));
            let duration = 0;
            if (alert.status === "marker") {
                for (let i = 0; i < state.categories.length; i++) {
                    for (let j = 0; j < state.categories[i].reportings.length; j++) {
                        if (state.categories[i].reportings[j].id === alert.reporting) {
                            duration = state.categories[i].reportings[j].duration;
                        }
                    }
                }
            } else if (alert.status === "beacon-reconition") {
                for (let i = 0; i < state.beacons.length; i++) {
                    if (state.beacons[i].id === alert.reporting) {
                        duration = state.beacons[i].duration;
                    }
                }
            }
            if (duration === -1) return true;
            return diffDays < duration;
        }),
        getAlertsWithoutBeacon: state => state.alerts.filter((alert: any) => {
            if (alert.status === "beacon-reconition") return false;
            // return true if alert is not expired
            const now = new Date();
            const alertDate = new Date(alert.created_at);
            const diff = Math.abs(now.getTime() - alertDate.getTime());
            const diffDays = Math.floor(diff / (1000 * 3600 * 24));
            let duration = 0;
            if (alert.status === "marker") {
                for (let i = 0; i < state.categories.length; i++) {
                    for (let j = 0; j < state.categories[i].reportings.length; j++) {
                        if (state.categories[i].reportings[j].id === alert.reporting) {
                            duration = state.categories[i].reportings[j].duration;
                        }
                    }
                }
            }
            if (duration === -1) return true;
            return diffDays < duration;
        }),
        getNewAlert: state => {
            const newestAlertBeacon = state.alerts.filter((alert: any) => alert.status === "beacon-reconition").sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
            // si l'alerte a un createdAt datant de moins de 1 minute
            if (newestAlertBeacon) {
                const now = new Date();
                const alertDate = new Date(newestAlertBeacon.created_at);
                const diff = Math.abs(now.getTime() - alertDate.getTime());
                const diffMinutes = Math.floor(diff / (1000 * 60));
                if (diffMinutes < 1 && !newestAlertBeacon.isOpened) return newestAlertBeacon;
            }
        },
        getAndSortAlertsBy: state => (prop: string) => {
            let alerts = [...state.alerts];
            if (alerts.length > 1) {
                switch (prop) {
                    case "latitude":
                        alerts.sort((a, b) => b.latitude - a.latitude);
                        break;
                    case "created_at":
                        alerts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                        break;
                    case "created_at_with_beacon_first":
                        // récupération du son avec le status beacon-reconition le plus récent qui est un animal
                        let beaconAlerts = alerts.filter((alert: any) => alert.status === "beacon-reconition");

                        let mostRecentBeaconAlert = null;
                        let mostRecentBeaconAlertNotAnimal = null;
                        if (beaconAlerts) {
                            const beaconAlertsAnimals = beaconAlerts.filter((alert: any) => {
                                for (let i = 0; i < state.beacons.length; i++) {
                                    if (state.beacons[i].id === alert.reporting && state.beacons[i].isAnimal) {
                                        return true;
                                    }
                                }
                                return false;
                            });
                            if (beaconAlertsAnimals.length === 1) mostRecentBeaconAlert = beaconAlertsAnimals[0];
                            else if (beaconAlertsAnimals.length > 1) mostRecentBeaconAlert = beaconAlertsAnimals.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
                            // récupération du dernier son avec le status beacon-reconition qui n'est pas un animal
                            const beaconAlertsNotAnimals = beaconAlerts.filter((alert: any) => {
                                for (let i = 0; i < state.beacons.length; i++) {
                                    if (state.beacons[i].id === alert.reporting && !state.beacons[i].isAnimal) {
                                        return true;
                                    }
                                }
                                return false;
                            });
                            if (beaconAlertsNotAnimals.length === 1) mostRecentBeaconAlertNotAnimal = beaconAlertsNotAnimals[0];
                            else if (beaconAlertsNotAnimals.length > 1) mostRecentBeaconAlertNotAnimal = beaconAlertsNotAnimals.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
                        };
                        // récupération des alertes marker et tri par date
                        const markerAlerts = alerts.filter((alert: any) => alert.status === "marker");
                        if (markerAlerts.length > 1) markerAlerts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                        alerts = [];
                        if (mostRecentBeaconAlert) alerts.push(mostRecentBeaconAlert);
                        if (mostRecentBeaconAlertNotAnimal) alerts.push(mostRecentBeaconAlertNotAnimal);
                        alerts = [...alerts, ...markerAlerts];
                        break;
                    default:
                        alerts.sort((a, b) => b[prop] - a[prop]);
                        break;
                }
            }
            return alerts.filter((alert: any) => {
                // return true if alert is not expired
                const now = new Date();
                const alertDate = new Date(alert.created_at);
                const diff = Math.abs(now.getTime() - alertDate.getTime());
                const diffDays = Math.floor(diff / (1000 * 3600 * 24));
                let duration = 0;
                if (alert.status === "marker") {
                    for (let i = 0; i < state.categories.length; i++) {
                        for (let j = 0; j < state.categories[i].reportings.length; j++) {
                            if (state.categories[i].reportings[j].id === alert.reporting) {
                                duration = state.categories[i].reportings[j].duration;
                            }
                        }
                    }
                } else if (alert.status === "beacon-reconition") {
                    for (let i = 0; i < state.beacons.length; i++) {
                        if (state.beacons[i].id === alert.reporting) {
                            duration = state.beacons[i].duration;
                        }
                    }
                }

                if (duration === -1) return true;
                return diffDays < duration;
            });
        },
        getAlertsWithoutBeaconAndSortBy: state => (prop: string) => {
            let alerts = [...state.alerts];
            switch (prop) {
                case "latitude":
                    alerts.sort((a, b) => b.latitude - a.latitude);
                    break;
                case "created_at":
                    alerts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                    break;
                default:
                    alerts.sort((a, b) => b[prop] - a[prop]);
                    break;
            }
            return alerts.filter((alert: any) => {
                if (alert.status === "beacon-reconition") return false;
                // return true if alert is not expired
                const now = new Date();
                const alertDate = new Date(alert.created_at);
                const diff = Math.abs(now.getTime() - alertDate.getTime());
                const diffDays = Math.floor(diff / (1000 * 3600 * 24));
                let duration = 0;
                if (alert.status === "marker") {
                    for (let i = 0; i < state.categories.length; i++) {
                        for (let j = 0; j < state.categories[i].reportings.length; j++) {
                            if (state.categories[i].reportings[j].id === alert.reporting) {
                                duration = state.categories[i].reportings[j].duration;
                            }
                        }
                    }
                }
                if (duration === -1) return true;
                return diffDays < duration;
            });
        },
        getUnreadAlerts: state => state.alerts.filter((alert: any) => {
            // return true if alert is not expired
            const now = new Date();
            const alertDate = new Date(alert.created_at);
            const diff = Math.abs(now.getTime() - alertDate.getTime());
            const diffDays = Math.floor(diff / (1000 * 3600 * 24));
            let duration = 0;
            if (alert.status === "marker") {
                for (let i = 0; i < state.categories.length; i++) {
                    for (let j = 0; j < state.categories[i].reportings.length; j++) {
                        if (state.categories[i].reportings[j].id === alert.reporting) {
                            duration = state.categories[i].reportings[j].duration;
                        }
                    }
                }
            } else if (alert.status === "beacon-reconition") {
                for (let i = 0; i < state.beacons.length; i++) {
                    if (state.beacons[i].id === alert.reporting) {
                        duration = state.beacons[i].duration;
                    }
                }
            }
            return diffDays < duration && !alert.isOpened;
        }),
        getAlertById: state => (id: any) => state.alerts.find((alert: any) => alert.id == id),
        getAlertPositionAsArray: state => (alert: any) => [alert.longitude, alert.latitude],
        getCategories: state => state.categories,
        getAlertUI: state => (reporting: any) => {
            if (!reporting) return null;
            for (let i = 0; i < state.categories.length; i++) {
                for (let j = 0; j < state.categories[i].reportings.length; j++) {
                    if (state.categories[i].reportings[j].id === reporting) {
                        return state.categories[i].reportings[j];
                    }
                }
            }
        },
        getAlertUIBeacon: state => (reporting: any) => {
            console.log("getAlertUIBeacon", reporting);
            if (!reporting) return null;
            for (let i = 0; i < state.beacons.length; i++) {
                if (state.beacons[i].id === reporting) {
                    console.log("return getAlertUIBeacon", state.beacons[i]);
                    return state.beacons[i];
                }
            }
        },
        getCategoryUI: state => (category: any) => state.categories.find((cat: any) => cat.id === category),
        getSelectCategory: state => state.selectCategory,
        categoryIsSelected: state => !!state.selectCategory,
        isDurationExpired: state => (alert: any) => {
            const now = new Date();
            const alertDate = new Date(alert.created_at);
            const diff = Math.abs(now.getTime() - alertDate.getTime());
            const diffDays = Math.floor(diff / (1000 * 3600 * 24));
            let duration = 0;
            if (alert.status === "marker") {
                for (let i = 0; i < state.categories.length; i++) {
                    for (let j = 0; j < state.categories[i].reportings.length; j++) {
                        if (state.categories[i].reportings[j].id === alert.reporting) {
                            duration = state.categories[i].reportings[j].duration;
                        }
                    }
                }
            } else if (alert.status === "beacon-reconition") {
                for (let i = 0; i < state.beacons.length; i++) {
                    if (state.beacons[i].id === alert.reporting) {
                        duration = state.beacons[i].duration;
                    }
                }
            }
            if (duration === -1) return false;
            return diffDays > duration;
        },
        getTimeText: state => (alert: any) => {
            const now = new Date();
            const alertDate = new Date(alert.created_at);
            const diff = Math.abs(now.getTime() - alertDate.getTime());
            /* return "this text" -> il y a "this text" */
            /* return day / hour / minute / quelques secondes / semaine / mois / année */
            const diffYears = Math.floor(diff / (1000 * 3600 * 24 * 365));
            const diffMonths = Math.floor(diff / (1000 * 3600 * 24 * 30));
            const diffWeeks = Math.floor(diff / (1000 * 3600 * 24 * 7));
            const diffDays = Math.floor(diff / (1000 * 3600 * 24));
            const diffHours = Math.floor(diff / (1000 * 3600));
            const diffMinutes = Math.floor(diff / (1000 * 60));
            const diffSeconds = Math.floor(diff / (1000));
            if (diffYears > 1) return "Il y a " + diffYears + " ans";
            if (diffYears === 1) return "Il y a un an";
            if (diffMonths > 1) return "Il y a " + diffMonths + " mois";
            if (diffMonths === 1) return "Il y a un mois";
            if (diffWeeks > 1) return "Il y a " + diffWeeks + " semaines";
            if (diffWeeks === 1) return "Il y a une semaine";
            if (diffDays > 1) return "Il y a " + diffDays + " jours";
            if (diffDays === 1) return "Il y a un jour";
            if (diffHours > 1) return "Il y a " + diffHours + " heures";
            if (diffHours === 1) return "Il y a une heure";
            if (diffMinutes > 1) return "Il y a " + diffMinutes + " minutes";
            if (diffMinutes === 1) return "Il y a une minute";
            if (diffSeconds > 30) return "Il y a quelques secondes";
            return "A l'instant";
        },
        isRecent: state => (alert: any) => {
            // return true if alert est create il y a moins d'une heure
            const now = new Date();
            const alertDate = new Date(alert.created_at);
            const diff = Math.abs(now.getTime() - alertDate.getTime());
            const diffHours = Math.floor(diff / (1000 * 3600));
            return diffHours < 1;
        },
        isAlreadyOpen: state => (alert: any) => alert.isOpened,
    },
});
