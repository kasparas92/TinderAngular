import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from 'ngx-gallery-9';
import { IMember } from 'src/app/Models/IMember';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  member: IMember;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMember();
    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      },
    ];
  }

  getMember() {
    this.memberService
      .getMemberById(+this.route.snapshot.paramMap.get('id'))
      .subscribe((response) => {
        this.member = response;
        this.galleryImages = this.getImages();
      });
  }

  getImages(): NgxGalleryImage[] {
    const ImageUrl = [];

    for (const photo of this.member.photos) {
      ImageUrl.push({
        small: photo.url,
        medium: photo.url,
      });
    }
    return ImageUrl;
  }
}
