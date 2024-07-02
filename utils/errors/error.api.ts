export const ErrorApiCatching = (res: any) => {
  let description = `UNDEFINED ERROR`;
  let solution = `This error not included in rest api firestore errors`;

  switch (res.error.status) {
    case "ABORTED":
      description = `The request conflicted with another request.`;
      solution = `Retry the request or re-structure your data model to reduce contention.`;
      break;

    case "ALREADY_EXISTS":
      description = `The request tried to create a document that already exists.`;
      solution = `Do not retry without fixing the problem.`;
      break;

    case "FAILED_PRECONDITION":
      description = `The request did not meet one of its preconditions. For example, a query request might require an index not yet defined. See the message field in the error response for the precondition that failed.`;
      solution = `Do not retry without fixing the problem.`;
      break;

    case "INTERNAL":
      description = `The Cloud Firestore server returned an error.`;
      solution = `Do not retry this request more than once.`;
      break;

    case "INVALID_ARGUMENT":
      description = `A request parameter includes an invalid value. See the message field in the error response for the invalid value.`;
      solution = `Do not retry without fixing the problem.`;
      break;

    case "NOT_FOUND":
      description = `The request attempted to update a document that does not exist.`;
      solution = `Do not retry without fixing the problem.`;
      break;

    case "PERMISSION_DENIED":
      description = `The user is not authorized to make this request.`;
      solution = `Do not retry without fixing the problem.`;
      break;

    case "RESOURCE_EXHAUSTED":
      description = `The project exceeded either its quota or the region/multi-region capacity.`;
      solution = `Verify that you did not exceed your project quota. If you exceeded a project quota, do not retry without fixing the problem. Otherwise, retry with exponential backoff.`;
      break;

    case "UNAUTHENTICATED":
      description = `The request did not include valid authentication credentials.`;
      solution = `Do not retry without fixing the problem.`;
      break;

    case "UNAVAILABLE":
      description = `The Cloud Firestore server returned an error.`;
      solution = `Retry using exponential backoff.`;
      break;

    default:
      break;
  }

  let ERROR: string = `status: ${res.error.status} \ncode: ${res.error.code} \nmessage: ${res.error.message} \nsolution: ${solution} \ndescription: ${description}`;

  console.error(ERROR);
};
