﻿// <auto-generated />
using System;
using Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Data.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20230422163554_Update posts and users tables")]
    partial class Updatepostsanduserstables
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Core.Domains.Baits.NaturalBait", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int?>("Amount")
                        .HasColumnType("integer");

                    b.Property<string>("Bait")
                        .HasColumnType("text");

                    b.Property<int?>("Big")
                        .HasColumnType("integer");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<double?>("GoldPrice")
                        .HasColumnType("double precision");

                    b.Property<int?>("Huge")
                        .HasColumnType("integer");

                    b.Property<string>("Image")
                        .HasColumnType("text");

                    b.Property<string>("Manufacturer")
                        .HasColumnType("text");

                    b.Property<int?>("Medium")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double?>("SilverPrice")
                        .HasColumnType("double precision");

                    b.Property<int?>("Skill")
                        .HasColumnType("integer");

                    b.Property<int?>("Small")
                        .HasColumnType("integer");

                    b.Property<bool?>("Soluble")
                        .HasColumnType("boolean");

                    b.Property<string>("Sort")
                        .HasColumnType("text");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<double?>("Weight")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("NaturalBaits");
                });

            modelBuilder.Entity("Core.Domains.Baits.UnnaturalBait", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Brand")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Floatation")
                        .HasColumnType("text");

                    b.Property<string>("Image")
                        .HasColumnType("text");

                    b.Property<string>("Manufacturer")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double?>("Price")
                        .HasColumnType("double precision");

                    b.Property<string>("Shop")
                        .HasColumnType("text");

                    b.Property<string>("Size")
                        .HasColumnType("text");

                    b.Property<string>("Sort")
                        .HasColumnType("text");

                    b.Property<string>("Tees")
                        .HasColumnType("text");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<int?>("Variants")
                        .HasColumnType("integer");

                    b.Property<double>("Weight")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("UnnaturalBaits");
                });

            modelBuilder.Entity("Core.Domains.Comments.Comment", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("AuthorId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("PostId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("PostId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Core.Domains.Fishes.Fish", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("Biting")
                        .HasColumnType("integer");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Experience")
                        .HasColumnType("integer");

                    b.Property<int>("Farm")
                        .HasColumnType("integer");

                    b.Property<string>("Image")
                        .HasColumnType("text");

                    b.Property<double>("L1")
                        .HasColumnType("double precision");

                    b.Property<double>("L2")
                        .HasColumnType("double precision");

                    b.Property<double>("L3")
                        .HasColumnType("double precision");

                    b.Property<string>("MapId")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ShortName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Trophy")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("MapId");

                    b.ToTable("Fishes");
                });

            modelBuilder.Entity("Core.Domains.Foods.Alcohol", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Full")
                        .HasColumnType("integer");

                    b.Property<int>("Hours")
                        .HasColumnType("integer");

                    b.Property<double>("Max")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Ostrog")
                        .HasColumnType("double precision");

                    b.Property<double>("PerOnePercent")
                        .HasColumnType("double precision");

                    b.Property<double>("PerOnePercent2")
                        .HasColumnType("double precision");

                    b.Property<string>("Pond")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Portion")
                        .HasColumnType("double precision");

                    b.Property<int>("Portions")
                        .HasColumnType("integer");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<string>("Shop")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Skill")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("Alcohols");
                });

            modelBuilder.Entity("Core.Domains.Gears.Coil", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("CoilType")
                        .HasColumnType("integer");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<double>("Freak")
                        .HasColumnType("double precision");

                    b.Property<double>("GoldPrice")
                        .HasColumnType("double precision");

                    b.Property<int>("Level")
                        .HasColumnType("integer");

                    b.Property<double>("MechKilo")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Peredat")
                        .HasColumnType("double precision");

                    b.Property<double>("SilverPrice")
                        .HasColumnType("double precision");

                    b.Property<int>("Size")
                        .HasColumnType("integer");

                    b.Property<double>("Speed")
                        .HasColumnType("double precision");

                    b.Property<double>("Test")
                        .HasColumnType("double precision");

                    b.Property<double>("ThreeHundred")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("Coils");
                });

            modelBuilder.Entity("Core.Domains.Gears.Rod", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Bonus1")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Bonus2")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Bonus3")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Build")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<double>("Durability")
                        .HasColumnType("double precision");

                    b.Property<int>("Feel")
                        .HasColumnType("integer");

                    b.Property<int>("GoldPrice")
                        .HasColumnType("integer");

                    b.Property<int>("Hardness")
                        .HasColumnType("integer");

                    b.Property<double>("Length")
                        .HasColumnType("double precision");

                    b.Property<int>("Level")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Power")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SilverPrice")
                        .HasColumnType("integer");

                    b.Property<string>("Sort")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Test1")
                        .HasColumnType("integer");

                    b.Property<int>("Test2")
                        .HasColumnType("integer");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Rods");
                });

            modelBuilder.Entity("Core.Domains.Hooks.FishingLine", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<double>("Hardness")
                        .HasColumnType("double precision");

                    b.Property<int>("Length1")
                        .HasColumnType("integer");

                    b.Property<int>("Length2")
                        .HasColumnType("integer");

                    b.Property<int>("Length3")
                        .HasColumnType("integer");

                    b.Property<int>("Length4")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Price1")
                        .HasColumnType("integer");

                    b.Property<int>("Price2")
                        .HasColumnType("integer");

                    b.Property<int>("Price3")
                        .HasColumnType("integer");

                    b.Property<int>("Price4")
                        .HasColumnType("integer");

                    b.Property<string>("Sort")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Thickness")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("FishingLines");
                });

            modelBuilder.Entity("Core.Domains.Hooks.Hook", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<double>("Height")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("S1")
                        .HasColumnType("double precision");

                    b.Property<double>("S10")
                        .HasColumnType("double precision");

                    b.Property<double>("S10Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S11")
                        .HasColumnType("double precision");

                    b.Property<double>("S12")
                        .HasColumnType("double precision");

                    b.Property<double>("S12Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S13")
                        .HasColumnType("double precision");

                    b.Property<double>("S14")
                        .HasColumnType("double precision");

                    b.Property<double>("S15")
                        .HasColumnType("double precision");

                    b.Property<double>("S16")
                        .HasColumnType("double precision");

                    b.Property<double>("S17")
                        .HasColumnType("double precision");

                    b.Property<double>("S18")
                        .HasColumnType("double precision");

                    b.Property<double>("S19")
                        .HasColumnType("double precision");

                    b.Property<double>("S1Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S2")
                        .HasColumnType("double precision");

                    b.Property<double>("S20")
                        .HasColumnType("double precision");

                    b.Property<double>("S22")
                        .HasColumnType("double precision");

                    b.Property<double>("S24")
                        .HasColumnType("double precision");

                    b.Property<double>("S2Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S3")
                        .HasColumnType("double precision");

                    b.Property<double>("S3Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S4")
                        .HasColumnType("double precision");

                    b.Property<double>("S4Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S5")
                        .HasColumnType("double precision");

                    b.Property<double>("S5Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S6")
                        .HasColumnType("double precision");

                    b.Property<double>("S6Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S7")
                        .HasColumnType("double precision");

                    b.Property<double>("S8")
                        .HasColumnType("double precision");

                    b.Property<double>("S8Zero")
                        .HasColumnType("double precision");

                    b.Property<double>("S9")
                        .HasColumnType("double precision");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Hooks");
                });

            modelBuilder.Entity("Core.Domains.Maps.Map", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("MapImage")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("TitleImage")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Maps");
                });

            modelBuilder.Entity("Core.Domains.Posts.Post", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("AuthorId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Likes")
                        .HasColumnType("integer");

                    b.Property<string>("Text")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Views")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("Core.Domains.Tools.Slingshot", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Bait")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<int>("Score0")
                        .HasColumnType("integer");

                    b.Property<int>("Score1")
                        .HasColumnType("integer");

                    b.Property<int>("Score2")
                        .HasColumnType("integer");

                    b.Property<int>("Score3")
                        .HasColumnType("integer");

                    b.Property<string>("Sort")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Slingshots");
                });

            modelBuilder.Entity("Core.Domains.Tools.Tool", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("GoldPrice")
                        .HasColumnType("double precision");

                    b.Property<string>("Image")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("SilverPrice")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("Tools");
                });

            modelBuilder.Entity("Core.Domains.Users.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("AvatarUri")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Role")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("FishNaturalBait", b =>
                {
                    b.Property<string>("FishesId")
                        .HasColumnType("text");

                    b.Property<string>("NaturalBaitsId")
                        .HasColumnType("text");

                    b.HasKey("FishesId", "NaturalBaitsId");

                    b.HasIndex("NaturalBaitsId");

                    b.ToTable("FishNaturalBait");
                });

            modelBuilder.Entity("FishUnnaturalBait", b =>
                {
                    b.Property<string>("FishesId")
                        .HasColumnType("text");

                    b.Property<string>("UnnaturalBaitsId")
                        .HasColumnType("text");

                    b.HasKey("FishesId", "UnnaturalBaitsId");

                    b.HasIndex("UnnaturalBaitsId");

                    b.ToTable("FishUnnaturalBait");
                });

            modelBuilder.Entity("PostUser", b =>
                {
                    b.Property<string>("LikesPostsId")
                        .HasColumnType("text");

                    b.Property<string>("UsersLikesId")
                        .HasColumnType("text");

                    b.HasKey("LikesPostsId", "UsersLikesId");

                    b.HasIndex("UsersLikesId");

                    b.ToTable("PostUser");
                });

            modelBuilder.Entity("PostUser1", b =>
                {
                    b.Property<string>("UsersViewsId")
                        .HasColumnType("text");

                    b.Property<string>("ViewsPostsId")
                        .HasColumnType("text");

                    b.HasKey("UsersViewsId", "ViewsPostsId");

                    b.HasIndex("ViewsPostsId");

                    b.ToTable("PostUser1");
                });

            modelBuilder.Entity("Core.Domains.Comments.Comment", b =>
                {
                    b.HasOne("Core.Domains.Users.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Domains.Posts.Post", "Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");

                    b.Navigation("Post");
                });

            modelBuilder.Entity("Core.Domains.Fishes.Fish", b =>
                {
                    b.HasOne("Core.Domains.Maps.Map", null)
                        .WithMany("Fishes")
                        .HasForeignKey("MapId");
                });

            modelBuilder.Entity("Core.Domains.Posts.Post", b =>
                {
                    b.HasOne("Core.Domains.Users.User", "Author")
                        .WithMany("Posts")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");
                });

            modelBuilder.Entity("FishNaturalBait", b =>
                {
                    b.HasOne("Core.Domains.Fishes.Fish", null)
                        .WithMany()
                        .HasForeignKey("FishesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Domains.Baits.NaturalBait", null)
                        .WithMany()
                        .HasForeignKey("NaturalBaitsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FishUnnaturalBait", b =>
                {
                    b.HasOne("Core.Domains.Fishes.Fish", null)
                        .WithMany()
                        .HasForeignKey("FishesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Domains.Baits.UnnaturalBait", null)
                        .WithMany()
                        .HasForeignKey("UnnaturalBaitsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PostUser", b =>
                {
                    b.HasOne("Core.Domains.Posts.Post", null)
                        .WithMany()
                        .HasForeignKey("LikesPostsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Domains.Users.User", null)
                        .WithMany()
                        .HasForeignKey("UsersLikesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PostUser1", b =>
                {
                    b.HasOne("Core.Domains.Users.User", null)
                        .WithMany()
                        .HasForeignKey("UsersViewsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Domains.Posts.Post", null)
                        .WithMany()
                        .HasForeignKey("ViewsPostsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Core.Domains.Maps.Map", b =>
                {
                    b.Navigation("Fishes");
                });

            modelBuilder.Entity("Core.Domains.Posts.Post", b =>
                {
                    b.Navigation("Comments");
                });

            modelBuilder.Entity("Core.Domains.Users.User", b =>
                {
                    b.Navigation("Posts");
                });
#pragma warning restore 612, 618
        }
    }
}
