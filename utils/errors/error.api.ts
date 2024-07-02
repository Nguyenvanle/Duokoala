export const ErrorApiCatching = (res: any) => {
  let errorDetails = {
    status: res.error?.status || "UNKNOWN_STATUS",
    code: res.error?.code || "UNKNOWN_CODE",
    message: res.error?.message || "Unknown error",
    solution: "This error is not included in the known error list.",
    description: "Undefined error.",
  };

  switch (errorDetails.status) {
    case "ABORTED":
      errorDetails.description = "The request conflicted with another request.";
      errorDetails.solution =
        "Retry the request or re-structure your data model to reduce contention.";
      break;

    case "ALREADY_EXISTS":
      errorDetails.description =
        "The request tried to create a document that already exists.";
      errorDetails.solution = "Do not retry without fixing the problem.";
      break;

    case "FAILED_PRECONDITION":
      errorDetails.description =
        "The request did not meet one of its preconditions. For example, a query request might require an index not yet defined. See the message field in the error response for the precondition that failed.";
      errorDetails.solution = "Do not retry without fixing the problem.";
      break;

    case "INTERNAL":
      errorDetails.description =
        "The Cloud Firestore server returned an error.";
      errorDetails.solution = "Do not retry this request more than once.";
      break;

    case "INVALID_ARGUMENT":
      errorDetails.description =
        "A request parameter includes an invalid value. See the message field in the error response for the invalid value.";
      errorDetails.solution = "Do not retry without fixing the problem.";
      break;

    case "NOT_FOUND":
      errorDetails.description =
        "The request attempted to update a document that does not exist.";
      errorDetails.solution = "Do not retry without fixing the problem.";
      break;

    case "PERMISSION_DENIED":
      errorDetails.description =
        "The user is not authorized to make this request.";
      errorDetails.solution = "Do not retry without fixing the problem.";
      break;

    case "RESOURCE_EXHAUSTED":
      errorDetails.description =
        "The project exceeded either its quota or the region/multi-region capacity.";
      errorDetails.solution =
        "Verify that you did not exceed your project quota. If you exceeded a project quota, do not retry without fixing the problem. Otherwise, retry with exponential backoff.";
      break;

    case "UNAUTHENTICATED":
      errorDetails.description =
        "The request did not include valid authentication credentials.";
      errorDetails.solution = "Do not retry without fixing the problem.";
      break;

    case "UNAVAILABLE":
      errorDetails.description =
        "The Cloud Firestore server returned an error.";
      errorDetails.solution = "Retry using exponential backoff.";
      break;

    default:
      // Sử dụng giá trị mặc định đã được gán ban đầu
      break;
  }

  const errorMessage = `
  status: ${errorDetails.status} 
  code: ${errorDetails.code} 
  message: ${errorDetails.message} 
  solution: ${errorDetails.solution} 
  description: ${errorDetails.description}`;

  console.error(errorMessage);
};