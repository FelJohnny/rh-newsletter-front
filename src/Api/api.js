const port = 3333;
const url = "http://localhost";

export function GET_ALL(tableName) {
  return {
    url: `${url}:${port}/${tableName}`,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  };
}

export function GET_TO_ID(tableName, id) {
  return {
    url: `${url}:${port}/${tableName}/${id}`,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  };
}

export function POST_DATA(tableName, data) {
  return {
    url: `${url}:${port}/${tableName}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  };
}

export function UPDATE_DATA(tableName, updateData, id) {
  return {
    url: `${url}:${port}/${tableName}/${id}`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    },
  };
}

export function DELETE_DATA(tableName, id) {
  return {
    url: `${url}:${port}/${tableName}/${id}`,
    options: {
      method: "DELETE",
    },
  };
}

export function POST_FILE(tableName, file) {
  const formData = new FormData();
  formData.append("file", file);
  return {
    url: `${url}:${port}/${tableName}`,
    options: {
      method: "POST",
      body: formData,
    },
  };
}

export function GET_FILE(tableName,fileName) {
  return {
    url: `${url}:${port}/${tableName}/${fileName}`,
    options: {
      method: "USE",
      headers: {
        Accept: "application/json",
      },
    },
  };
}