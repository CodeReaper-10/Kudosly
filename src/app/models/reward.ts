export class Reward {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    redeemed: boolean;
  
    constructor(id: number, name: string, description: string, points: number, image: string, redeemed: boolean) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.points = points;
      this.image = image;
      this.redeemed = redeemed;
    }
  }
  