export const addComment = (new_comment) => async (dispatch) => {
    const { user_id, ask_a_guru_id, comment } = new_comment;
    const response = await fetch("/api/comments/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        ask_a_guru_id,
        comment,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  };