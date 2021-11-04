export const dateParser = (num) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let timestamp = Date.parse(num);
  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return date.toString();
};

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const clearUrlStyle = (value) => {
  const widgetWithSpace = value.replaceAll("%20", " ");
  const widgetWithAcute = widgetWithSpace.replaceAll("%C3%A9", "é");
  const widget = widgetWithAcute.replaceAll("%C3%A8", "è");
  return (
    widget
  );
};

export const srcExtension = (value) => {
  const srcExtension = "../."
  const picture = value
  const pictureSrc = srcExtension + picture
  return (
    pictureSrc
  );
};

export const switchColorTeam = (team) => {
  switch (team) {
    case 'Éducative': {
      return { "backgroundColor": "#61a6fb" }
    }
    case 'Médical': {
      return { "backgroundColor": "#28da69" }
    }
    case '': {
      return { "backgroundColor": "#e826b1" }
    }
    default:
      return { "backgroundColor": "#e826b1" }
  }
}


export const switchColorWidget = (team) => {
  switch (team) {
    case 'Éducative': {
      return {
        "backgroundColor": "rgb(209, 229, 255)",
        "borderColor": "#61a6fb",
        "color": "#61a6fb",
        "cursor": "pointer",
        "border-radius": 20,
        "border-width":5
      }
    }
    case 'Médical': {
      return {
        "backgroundColor": "rgb(208, 250, 222)",
        "borderColor": "#28da69",
        "color": "#28da69",
        "cursor": "pointer",
        "border-radius": 20,
        "border-width":5
      }
    }
    case '': {
      return {
        "backgroundColor": "rgb(252, 230, 248)",
        "borderColor": "#e826b1",
        "borderWidth": "5px",
        "color": "#e826b1",
        "cursor": "pointer",
        "border-radius": 20,
        "border-width":5
      }
    }
    case 'guest': {
      return {
        "backgroundColor": "#f5d842",
        "borderColor": "#f0ad4e",
        "color": "#f0ad4e",
        "cursor": "pointer",
        "border-radius": 20,
        "border-width":5
      }
    }
    default:
      return {
        "backgroundColor": "rgb(252, 230, 248)",
        "borderColor": "#e826b1",
        "color": "#e826b1",
        "cursor": "pointer",
        "border-radius": 20,
        "border-width":5
      }
  }
}
