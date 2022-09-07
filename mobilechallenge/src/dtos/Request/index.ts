export type ResponseProps = {
  data: {
    next: string;
    results: [
      {
        name: string;
        url: string;
      },
    ];
  };
};
